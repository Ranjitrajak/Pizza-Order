import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize"
import { Pizza } from 'src/pizza/pizza.model';
import { PizzaModule } from 'src/pizza/pizza.module';
import { ToppingModule } from 'src/topping/topping.module';
import { CartController } from './cart.controller';
import { Cart } from './cart.model';
import { CartService } from './cart.service';


@Module({
  imports: [SequelizeModule.forFeature([Cart]),PizzaModule,ToppingModule],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}