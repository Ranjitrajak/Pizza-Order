
import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript"
import { User } from "src/user/user.model"



@Table({ tableName: "Cart" })
export class Cart extends Model {
	
	@PrimaryKey
	@AutoIncrement
	@Column
	id: number
	
	@ForeignKey(() =>User)
	@Column
	UserId: number
	
	@Column
	pizza:string
	
	@Column
	topping: string
	
	@Column
    totalCost: number
	
}