import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { ToppingController } from './topping,controller';
import { Topping } from './topping.model';
import { ToppingService } from './topping.service';


@Module({
    imports: [SequelizeModule.forFeature([Topping])],
    controllers: [ToppingController],
    providers: [ToppingService],
    exports: [SequelizeModule]

})
export class ToppingModule { }