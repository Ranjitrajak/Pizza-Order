import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { get } from 'https';
import { Pizza } from 'src/pizza/pizza.model';
import { Topping } from 'src/topping/topping.model';
import { Cart } from './cart.model';
import { CartDto } from './cartdto';


@Injectable()
export class CartService {
    constructor(

        @InjectModel(Cart)
        private cartModel: typeof Cart,
        @InjectModel(Pizza)
        private pizzaModel:typeof Pizza,
        @InjectModel(Topping)
        private toppingModel:typeof Topping,


    ) { }

    async createCart(cart: CartDto): Promise<Cart> {

        // const getpizza= await this.pizzaModel.findOne({where:{id:cart.pizza}})
        // let addPrice :number=0
        // addPrice +=getpizza.price

        // if(cart.topping){
        //     const gettopping= await this.toppingModel.findOne({where:{id:cart.topping}})
        //     addPrice+=gettopping.additionalCost
        // }
        

        const newcart = await this.cartModel.create({ ...cart})

        return newcart


    }

    async getCartById(id: number) {
        return await this.cartModel.findAll({
            where: { UserId: id }
        })
    }
    async deleteCartItemsById(id: number) {
		return await this.cartModel.destroy({
			where: { UserId: id }
		})
	}


}