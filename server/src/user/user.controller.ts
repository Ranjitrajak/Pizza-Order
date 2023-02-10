import { Body, Controller, HttpException, HttpStatus, Post, Req, UseGuards,Get  } from '@nestjs/common'
import { User } from './user.model'
import { UserService } from './users.service'
import { Request } from "express"
import { UserDto } from './userdto'
import { JwtAuthGuard } from './jwt-auth.guard'

interface logUser {
	email: string
	password: string
}


@Controller('user')
export class UserController {

	constructor(private readonly userService: UserService) { }

	@Post('/create')
	async createUser(@Body() user: UserDto) {

		


		const newUser = await this.userService.createUser(user)

		if (newUser) return newUser

		else return new HttpException("Something went wrong in creating user", HttpStatus.BAD_REQUEST)
	}
	@Post('/login')
	async loginUser(@Req() req: Request, @Body() user: logUser) {
		return req.body.access_token
	}

	@UseGuards(JwtAuthGuard)
	@Get('/mycart')
	async getMyCart() {
		return {msg: "My Cart"}
	}

}