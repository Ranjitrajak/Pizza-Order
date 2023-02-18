import { FC, useEffect, useState , useContext} from "react"
import { Button, Card, Col} from "antd"
import Select, { Options } from "react-select"
import { Pizza } from '../types/Pizza'
import { Topping } from '../types/Tooping'
import "../styles/pizzacard.css"
import { Top } from "../types/Top"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext"
interface PizzaCardProps {
	item: Pizza
	ingredients: Topping[]
}

const PizzaCard : FC<PizzaCardProps> = ({ item, ingredients }): JSX.Element => {
	console.log(ingredients)
	const naviagte = useNavigate();
    const [ price, setPrice ] = useState(0)
    const [ toppings, setToppings ] = useState<Top[]>([])
	const [ pizza, setPizza ] = useState("")
	const { loggedIn, setLoggedIn }: any = useContext(UserContext)
	
	
    useEffect(() => {
		setPrice(item.price)
		setPizza(item.name)
		
	},[])

    
	const handleSelect = (option: any) => {
		let finalToppings: Top[] = []
		
		let total=price
		option.forEach((item: any) => {
			 total+= item.additionalCost
			 finalToppings.push(item.value)
			
		})
		
		setPrice(total)
		setToppings(finalToppings)
	}

    
	const addToCart = async () => {
		
		if(loggedIn){
			const token = localStorage.getItem("accessToken")
			const email = localStorage.getItem('userEmail')
			const headerConfig = { headers: { Authorization: `Bearer ${ token }` } }
			const { data } = await axios.get(`http://localhost:5000/user/${ email }`, headerConfig)
			const userId = await data.userId
			
			const postData = {
				"UserId": userId,
				"pizza": pizza,
				"topping": JSON.stringify(toppings),
				"totalCost":price
				
				
			}
			console.log(postData)
			try {
				
				await axios.post(`http://localhost:5000/cart/create`, postData,headerConfig)
			} catch(e) {
				console.log(e)
			}

		}else{
			naviagte('/sign')
			
		
		}
		
			
			
			
		
		
	}
  return (
   <>
   
   <Col className={ "gutter-row" } span={ 8 } style={ {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "20px"
			} }>
				<Card
					hoverable
					style={ { width: 400 } }
					cover={ <img
						src={ item.img }
						alt={ "" } className={ "cover-image" }/> }
				>
					<div className="text-container">
						<div className="title">
							<div>{ item.name }</div>
							
						</div>
						<div className="price">₹ { price } </div>
						<div className="desc">{ item.description.replaceAll(/\\/g, "\n") }</div>
					</div>
					
					<div className="dropdown">
						<div className="select" style={ { width: "250px" } }>
							
							<Select options={ingredients}
							        closeMenuOnSelect={ false }
							        isMulti={ true }
							        onChange={ handleSelect }
							        placeholder={ "Ingredients" }
							/>
								
						</div>
						
						<Button onClick={addToCart}>Add to Cart</Button>
					</div>
				
				</Card>
			</Col>
   </>
  )
}

export default PizzaCard