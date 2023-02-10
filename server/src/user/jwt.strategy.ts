import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { Injectable } from "@nestjs/common"


import { User } from "./user.model"
import { UserService } from "./users.service"



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

	constructor(private readonly userService: UserService) {

		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey:'pizzalover'
		})
	}
	
	async validate(payload: any) {
		const user: User = await this.userService.findById(payload.userId)
		const { fullName, email, phoneNumber, address } = user.toJSON()
		
		return { fullName, email, phoneNumber, address }
	}
}