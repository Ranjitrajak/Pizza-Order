import { Controller, Get,Body,  HttpException, HttpStatus, Post, } from '@nestjs/common'
import { PizzaService } from "./pizza.service"
import { PizzaDto } from './pizzadto'

@Controller('pizza')
export class PizzaController {
	
	constructor(private readonly pizzaService: PizzaService) {
	}

    @Post('/create')
	async createpizza(@Body() pizza:PizzaDto) {

		


		const newPizza = await this.pizzaService.createPizza(pizza)

		if (newPizza) return newPizza

		else return new HttpException("Something went wrong in creating Pizza", HttpStatus.BAD_REQUEST)
	}

	
	@Get('/all')
	async getAllPizza() {
		return await this.pizzaService.findAll()
	}
}