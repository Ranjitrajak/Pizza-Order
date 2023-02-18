import { FC, useEffect, useState } from "react"

import axios from "axios"


import OrderItem from "./OrderItem"



interface OrderType {
  id: number
  UserId: number
  Pizza_order: string
}


const Order: FC = (): JSX.Element => {
  const [orders, setOrders] = useState<OrderType[]>([])
  useEffect(() => {
    


    async function getOrders() {
      const token = localStorage.getItem("accessToken")
			const email = localStorage.getItem('userEmail')

			const headerConfig = { headers: { Authorization: `Bearer ${ token }` } }
			const res  = await axios.get(`http://localhost:5000/user/${ email }`, headerConfig)
      console.log(res)
			const userId = await res.data.userId
      console.log(userId)

      const { data } = await axios.get(`http://localhost:5000/order/${ userId }`, headerConfig)
      setOrders(data)
    }

    getOrders()
  }, [])

  if (orders.length) {
    const parsedArray = orders.map(order => JSON.parse(order.Pizza_order))
    parsedArray.map(arr => console.log(arr))
  }
  let total = 0
  return (
    <>
      <div className="orderTitle">
        My Orders
      </div>
      <div className="mainOrderContainer" >

        {
          orders.map(order => {
            total++
            return (



              JSON.parse(order.Pizza_order).map((item: any, index: number) => {
                return (
                  <OrderItem item={item} key={index} />
                )
              })



            )
          })

        }

      </div>

    </>
  )
}

export default Order