import * as bcrypt from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  AfterInsert
  // getConnection
} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { Listing } from "./Listing";
import { Billing } from "./Billing";

type UserRole = "user" | "admin";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("text")
  name: string;

  @Column("text")
  lastname: string;

  @Column("text")
  password: string;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @Column("boolean", { default: true })
  active: boolean;

  @Column("boolean", { default: false })
  confirmed: boolean;

  @Column("boolean", { default: false })
  forgotPasswordLocked: boolean;

  @Column("text", { array: true, default: "{user}" })
  roles: UserRole[];

  @OneToMany(() => Listing, listing => listing.user)
  listings: Listing[];

  @OneToOne(() => Billing)
  @JoinColumn()
  billing: Billing;

  @BeforeInsert()
  async doBeforeInsert() {
    // Hash the password
    this.password = await bcrypt.hash(this.password, 10);

    // Create the billing info for the user
    const billingInfo = new Billing();
    this.billing = billingInfo;
    await billingInfo.save();
  }

  @AfterInsert()
  async doAfterInsert() {
    // const response = await getConnection()
    //   .getRepository(User)
    //   .createQueryBuilder("user")
    //   // .innerJoinAndSelect("user.billing", "billing")
    //   .where('user."id" = :value', {
    //     value: "c0b4440c-c0c2-4f11-a68f-e1c26f4d09ab"
    //   })
    //   .getOne();
    // console.log("ALIBABA RESPONSE IS=> ,", response);
  }
}
