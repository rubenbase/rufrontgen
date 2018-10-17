import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne
  } from "typeorm";
  import { User } from "./User";

  @Entity("menus")
  export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("varchar", { length: 100 })
    name: string;

    @Column("uuid")
    userId: string;
  
    @ManyToOne(() => User, user => user.listings)
    user: User;
  }
  