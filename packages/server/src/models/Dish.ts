import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne
  } from "typeorm";
  import { Menu } from "./Menu";
  
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
    menuId: string;
  
    @ManyToOne(() => Menu)
    menu: Menu;
  }
  