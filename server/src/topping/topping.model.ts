import {  AutoIncrement,Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript"



@Table
export class Topping extends Model {
	@PrimaryKey
    @AutoIncrement
	@Column
	id: number
	
	@Column
	label: string
	@Column
	value: string

	@Column
	additionalCost:number
}