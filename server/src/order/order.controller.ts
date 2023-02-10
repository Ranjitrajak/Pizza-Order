import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderDto } from './orderdto'


@Controller('order')
export class OrderController {
	constructor(private readonly orderService:OrderService) {}

    @Post('/create')
	async createOrder(@Body() order: OrderDto) {
		return await this.orderService.createOrder(order)
	}
	
	
	@Get('/:id')
	async getOrderById(@Param('id', ParseIntPipe) id: number) {
		return await this.orderService.getOrderById(id)
	}
	
	
	
}