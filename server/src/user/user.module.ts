import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HashPasswordMiddleware } from './hashPassword.middleware';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './users.service';
import { JwtModule } from "@nestjs/jwt"
import { AuthenticateMiddleware } from './AuthenticateUser';
import { GeneratejwtMiddleware } from './generatetoken';
import { JwtStrategy } from './jwt.strategy';


@Module({

    imports:[SequelizeModule.forFeature([User]),JwtModule.register({
      secret:"pizzalover",
      signOptions: { expiresIn: "30m" }
    })],
    controllers: [UserController],
    providers: [UserService, JwtStrategy],
    exports:[UserService]

})
export class UserModule implements NestModule {
	configure(consumer: MiddlewareConsumer): any {
		consumer.apply(HashPasswordMiddleware)
			.forRoutes({
				path: 'user/signup',
				method: RequestMethod.POST
			})
      consumer.apply(AuthenticateMiddleware)
			.forRoutes({
				path: "user/login",
				method: RequestMethod.POST
			})
		consumer.apply(GeneratejwtMiddleware)
			.forRoutes({
				path: "user/login",
				method: RequestMethod.POST
			})
		
	
	}
}