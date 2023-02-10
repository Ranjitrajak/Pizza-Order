import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize"
import { PizzaController } from './pizza.controller';
import { Pizza } from "./pizza.model"
import { PizzaService } from './pizza.service';

@Module({
  imports: [SequelizeModule.forFeature([Pizza])],
  controllers: [PizzaController],
  providers: [PizzaService],
  exports: [SequelizeModule]
})
export class PizzaModule {}