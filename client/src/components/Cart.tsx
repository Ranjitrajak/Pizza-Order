import { FC, useEffect, useState } from "react"
import axios from "axios"
import '../styles/cart.css'


import CartItem from "./CartItem"


import CartType from "../types/Cart"
import { table } from "console"



const Cart: FC = (): JSX.Element => {
	const [ price, setPrice ] = useState(0)
	const [ response, setResponse ] = useState<CartType[]>([])
	const [ userId, setUserId ] = useState(0)
	
	
	useEffect(() => {
		async function getCartItems() {
			const token = localStorage.getItem("accessToken")
			const email = localStorage.getItem('userEmail')

			const headerConfig = { headers: { Authorization: `Bearer ${ token }` } }
			const { data } = await axios.get(`http://localhost:5000/user/${ email }`, headerConfig)
			const userId = await data.userId
			setUserId(userId)


			
			const getCart = await axios.get(`http://localhost:5000/cart/${ userId }`,headerConfig)
			setResponse(getCart.data)
			
		}
		
		getCartItems()
		
	}, [])
	
	useEffect(() => {
		let total = 0
		response.forEach((response: CartType) => {
			total += response.totalCost
		})
		setPrice(total)
	}, [ response ])
	
	
	const handleCheckout = async () => {
		
		const Pizza_order:any= []
		response.forEach(res => {
			const obj = {
				"pizza": res.pizza,
				"price": res.totalCost,
				"topping":res.topping
			}
			Pizza_order.push(obj)
		})
		const orderItem = {
			"UserId": userId ,
			"Pizza_order": JSON.stringify( Pizza_order)
		}
		const token = localStorage.getItem('accessToken')
		const headerConfig = { headers: { Authorization: `Bearer ${ token }` } }
		
		try {

			await axios.post('http://localhost:5000/order/create', orderItem,headerConfig )

			await axios.delete(`http://localhost:5000/cart/${ userId }`, headerConfig )
		
			
		} catch (e) {
			console.log(e)
		}
		
		setResponse([])
	}
	
	return (
		<>
			<div className="mainCartContainer">
				
				<div className="cartTitle">
					<div style={{marginLeft:"150px"}}>Pizza</div>
					<div style={{marginLeft:"450px"}}>Topping</div>
					<div style={{marginLeft:"200px"}}>cost</div>
				</div>
				<div className="pizzaContainer">
					{
						response.map(item => {
							return <CartItem item={ item } key={ item.id }/>
						})
					}
				</div>
				<div className="footer">
					
					<button className="orderButton" onClick={ handleCheckout} >
						<div className="totalItems">
							 Items:{ response.length }
						</div>
						<div className="checkout">
							Place Order
						</div>
						<div className="totalPrice">
							Total:{ price } ₹
						</div>
					
					</button>
				</div>
			</div>
		</>
	)
}

export default Cart

