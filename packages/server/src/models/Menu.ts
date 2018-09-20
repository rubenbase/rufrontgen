import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn
  } from "typeorm";
  
  @Entity("menus")
  export class Menu extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("varchar", { length: 100 })
    name: string;
  }
  