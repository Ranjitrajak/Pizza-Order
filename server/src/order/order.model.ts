
import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table, BeforeCreate, BeforeUpdate  } from "sequelize-typescript";
import { User } from "src/user/user.model"


@Table
export class Order extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @ForeignKey(() => User)
    @Column
    UserId: number


    @Column
    Pizza_order: string

}