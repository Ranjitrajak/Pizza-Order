import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Topping } from './topping.model';
import { ToppingDto } from './toppingdto';

@Injectable()
export class ToppingService {
    constructor(
        @InjectModel(Topping)
        private ToppingModel: typeof Topping
    ) { }

    async createTop(topping: ToppingDto): Promise<Topping> {

        const newTop = await this.ToppingModel.create({ ...topping })

        return newTop


    }

    async findAll(): Promise<Topping[]> {
        
        return this.ToppingModel.findAll()
    }
}