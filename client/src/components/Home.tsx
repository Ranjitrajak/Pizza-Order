import { FC, useEffect ,useState} from "react"
// import { AppBar, Toolbar, styled } from '@mui/material';
import Navbar from "./Navbar";
import axios from "axios"
import '../styles/home.css'
import { Row } from "antd"
import { Pizza } from "../types/Pizza";
import { Topping } from "../types/Tooping";
import PizzaCard from "./PizzaCard";


 

const Home : FC = (): JSX.Element =>{
  const [ items, setItems ] = useState<Pizza[]>([])
	const [ ingredients, setIngredients ] = useState<Topping[]>([])
	
	useEffect(() => {
		async function getItems() {
			const { data } = await axios.get('http://localhost:5000/pizza/all')
			setItems(data)
		}
		async function getIngredients() {
			const { data } = await axios.get('http://localhost:5000/Top/all')
			setIngredients(data)
		}
		getItems()
		getIngredients()
	}, [])
  return (
    <>
    <div className="Home" style={{paddingTop:'80px'}}>
      
      
      <Row gutter={[5, 30]}>
				{
					items.map(item => {
						return <PizzaCard item={item} key={item.id} ingredients={ingredients} />
					})
				}
			</Row>
    
      
             
      </div>
	  
    </>
  
  )
}

export default Home