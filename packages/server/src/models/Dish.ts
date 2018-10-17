import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne
  } from "typeorm";
  import { Menu } from "./Menu";
  import { User } from "./User";
  
  @Entity("dishes")
  export class Dish extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("text")
    name: string;
  
    @Column("text")
    description: string;

    @Column("int")
    price: number;

    @Column("uuid")
    userId: string;
  
    @ManyToOne(() => User, user => user.listings)
    user: User;
  
    @Column("uuid")
    menuId: string;
  
    @ManyToOne(() => Menu)
    menu: Menu;
  }
  