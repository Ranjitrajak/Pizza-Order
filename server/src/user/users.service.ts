import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { User } from './user.model';
import { UserDto } from './userdto';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }


  async createUser(user: UserDto): Promise<User> {

    const newUser = await this.userModel.create({ ...user })

    return newUser


  }
  async findByEmail(email: string): Promise<User> {

    return await this.userModel.findOne({
      where: {
        email
      }
    })
  }

  async findById(userId: number): Promise<User> {
		return await this.userModel.findOne({
			where: {
				userId
			}
		})
	}




}