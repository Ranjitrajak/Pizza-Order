import { Controller, Get,Param, ParseIntPipe,Body,  HttpException, HttpStatus, Post,Delete,UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/user/jwt-auth.guard'
import { CartService } from './cart.service'
import { CartDto } from './cartdto'


@Controller('cart')
export class CartController {
	
	constructor(private readonly cartService: CartService) {
	}

	@UseGuards(JwtAuthGuard)

    @Post('/create')
	async createcart(@Body() cart:CartDto) {

		


		const newcart = await this.cartService.createCart(cart)

		if (newcart) return newcart

		else return new HttpException("Something went wrong in creating cart", HttpStatus.BAD_REQUEST)
	}
	@UseGuards(JwtAuthGuard)
    @Get('/:id')
	async getCartItemsById(@Param('id', ParseIntPipe) id: number) {
		return await this.cartService.getCartById(id)
	}
	@UseGuards(JwtAuthGuard)
	@Delete('/:id')
	async deleteCartItems(@Param('id', ParseIntPipe) id: number) {
		return await this.cartService.deleteCartItemsById(id)
	}

}