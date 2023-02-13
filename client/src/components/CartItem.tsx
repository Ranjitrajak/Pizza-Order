import { FC } from "react"
import CartType from "../types/Cart"
import '../styles/cart.css'


type CartItemProps = {
	item: CartType
	
}

const CartItem: FC<CartItemProps> = ( { item } : CartItemProps): JSX.Element => {
	const ingredientArray = JSON.parse(item.topping).map((top: string) => JSON.stringify(top))
	const finalIngredients = ingredientArray.join(", ").replaceAll('"', "")
	return (
		<>
			<div className="itemName">
				{
					`${ item.pizza } `
				}
			</div>
			<div className="addons">
				{
					 `${ finalIngredients } `
				}
			</div>
			<div className="itemPrice">
				{ item.totalCost } ₹
			</div>
		</>
	)
}

export default CartItem