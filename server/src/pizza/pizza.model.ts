import {AutoIncrement ,Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript"




@Table
export class Pizza extends Model  {
	@PrimaryKey
    @AutoIncrement
	@Column
	id: number
	
	@Column
	name: string
	
	
	@Column
	price: number
	
	@Column
	description: string
	
	@Column
	quantity: number
	
	@Column
	img: string

}
// (DataType.NUMBER)