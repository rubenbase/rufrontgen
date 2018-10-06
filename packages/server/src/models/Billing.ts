// @ts-ignore
import * as bcrypt from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToOne,
  JoinColumn
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { User } from "./User";

@Entity("billings")
export class Billing extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("money")
  price: number;

  @Column("text", { nullable: true })
  stripeId: string;

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
