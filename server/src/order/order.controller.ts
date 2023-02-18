import { Body, Controller, Get, Param, ParseIntPipe, Post ,UseGuards} from '@nestjs/common'
import { JwtAuthGuard } from 'src/user/jwt-auth.guard'
import { OrderService } from './order.service'
import { OrderDto } from './orderdto'


@Controller('order')
export class OrderController {
	constructor(private readonly orderService:OrderService) {}

	@UseGuards(JwtAuthGuard)

    @Post('/create')
	async createOrder(@Body() order: OrderDto) {
		return await this.orderService.createOrder(order)
	}

	
	@UseGuards(JwtAuthGuard)
	@Get('/:id')
	async getOrderById(@Param('id', ParseIntPipe) id: number) {
		return await this.orderService.getOrderById(id)
	}
	
	
	
}