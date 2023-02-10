import {  AutoIncrement,Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript"



@Table
export class Topping extends Model {
	@PrimaryKey
    @AutoIncrement
	@Column
	id: number
	
	@Column
	name: string

	@Column
	additionalCost:number
}