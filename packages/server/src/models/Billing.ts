// @ts-ignore
import * as bcrypt from "bcryptjs";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";

@Entity("billings")
export class Billing extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("money")
  price: number;

  @Column("text", { nullable: true })
  stripeId: string;

  @Column("text", { default: "free-trial" })
  plan: string;
}
