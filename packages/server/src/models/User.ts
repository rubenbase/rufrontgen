import * as bcrypt from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("text") name: string;

  @Column("text") lastname: string;

  @Column("text") password: string;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @Column("boolean", { default: true })
  active: boolean;

  @Column("boolean", { default: false })
  confirmed: boolean;

  @Column("boolean", { default: false })
  forgotPasswordLocked: boolean;

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
