import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne
  } from "typeorm";
  import { Dish } from "./Dish";
  import { User } from "./User";
  
  @Entity("allergenes")
  export class Allergene extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("text")
    name: string;
  
    @Column("text")
    description: string;

    @Column("uuid")
    userId: string;
  
    @ManyToOne(() => User, user => user.listings)
    user: User;
  
    @Column("uuid")
    dishId: string;
  
    @ManyToOne(() => Dish)
    dish: Dish;
  }
  