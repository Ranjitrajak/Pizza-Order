import { Body, Controller, Get, Post } from '@nestjs/common'
import { ToppingService } from './topping.service'

import { ToppingDto } from './toppingdto'


@Controller('top')
export class ToppingController {

	constructor(private readonly toppindService: ToppingService) {}
	
	
	
	@Post('/create')
	async createIngredient(@Body() topping: ToppingDto) {
		return await this.toppindService.createTop(topping)
	}

    @Get('/all')
	async findAll() {
		return this.toppindService.findAll()
	}
}