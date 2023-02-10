import { Controller, Get,Param, ParseIntPipe,Body,  HttpException, HttpStatus, Post, } from '@nestjs/common'
import { CartService } from './cart.service'
import { CartDto } from './cartdto'


@Controller('cart')
export class CartController {
	
	constructor(private readonly cartService: CartService) {
	}

    @Post('/create')
	async createcart(@Body() cart:CartDto) {

		


		const newcart = await this.cartService.createCart(cart)

		if (newcart) return newcart

		else return new HttpException("Something went wrong in creating cart", HttpStatus.BAD_REQUEST)
	}
    @Get('/:id')
	async getCartItemsById(@Param('id', ParseIntPipe) id: number) {
		return await this.cartService.getCartById(id)
	}

}