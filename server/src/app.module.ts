import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from "@nestjs/sequelize"
import { UserModule } from './user/user.module';
import { PizzaModule } from './pizza/pizza.module';
import { ToppingModule } from './topping/topping.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ SequelizeModule.forRoot({
		dialect: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: 'postgres',
        database: 'pizzastore',
        autoLoadModels: true,
		synchronize: true,

	}),UserModule,PizzaModule,ToppingModule,CartModule,OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
