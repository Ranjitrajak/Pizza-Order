import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript"



@Table

export class User extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column
	userId: number
	
	@Column
	fullName: string
	
	@Column
	password: string
	
	@Column
	email: string
	
	@Column(DataType.NUMBER)
	phoneNumber: number
	
	@Column
	address: string
	
	
	
}
