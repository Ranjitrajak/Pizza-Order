import { FC, useEffect, useState, MouseEvent, useContext } from "react"
import { Button, Card, Checkbox, Col, Dropdown, Menu, MenuProps, message, Space } from "antd"
import Select, { Options } from "react-select"
import { Pizza } from '../types/Pizza'
import { Topping } from '../types/Tooping'
import "../styles/pizzacard.css"
import { Top } from "../types/Top"
import axios from "axios"
interface PizzaCardProps {
	item: Pizza
	ingredients: Topping[]
}

const PizzaCard : FC<PizzaCardProps> = ({ item, ingredients }): JSX.Element => {
	console.log(ingredients)
    const [ price, setPrice ] = useState(0)
    const [ toppings, setToppings ] = useState<Top[]>([])
	const [ pizza, setPizza ] = useState("")
	
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
		
			
			
			const postData = {
				"UserId": 1,
				"pizza": pizza,
				"topping": JSON.stringify(toppings),
				"totalCost":price
				
				
			}
			console.log(postData)
			try {
				
				await axios.post(`http://localhost:5000/cart/create`, postData)
			} catch(e) {
				console.log(e)
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
						<div className="price">{ price } ₹</div>
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