import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize"
import { Pizza } from "./pizza.model"
import { PizzaDto } from './pizzadto';

@Injectable()
export class PizzaService {
	constructor(
		@InjectModel(Pizza)
		private pizzaModel: typeof Pizza
	) {}

    async createPizza(pizza:PizzaDto): Promise<Pizza> {

        const newPizza = await this.pizzaModel.create({ ...pizza })
    
        return newPizza
    
    
      }
	
	async findAll(): Promise<Pizza[]> {
		return this.pizzaModel.findAll()
	}
}