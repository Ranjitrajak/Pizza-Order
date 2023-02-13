import { FC } from "react"

import '../styles/order.css'


type OrderItemProps = {
	item: any
	
}

const OrderItem: FC<OrderItemProps> = ( { item } :OrderItemProps): JSX.Element => {
    console.log(item)
	const ingredientArray = JSON.parse(item.topping).map((top: string) => JSON.stringify(top))
	const finalIngredients = ingredientArray.join(", ").replaceAll('"', "")
	return (
		<> <div className="oderitem" >
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
				{ item.price } ₹
			</div>

        </div>
			
		</>
	)
}

export default OrderItem