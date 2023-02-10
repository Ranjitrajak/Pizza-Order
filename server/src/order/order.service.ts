import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Order } from './order.model';
import { OrderDto } from './orderdto';



@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order)
        private orderModel: typeof Order

    ) { }

    async createOrder(cart: OrderDto): Promise<Order> {

        const newcart = await this.orderModel.create({ ...cart })

        return newcart


    }

    async getOrderById(id: number) {
        return await this.orderModel.findAll({
            where: { UserId: id }
        })
    }


}