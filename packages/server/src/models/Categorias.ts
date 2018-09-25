import { BaseEntity } from 'typeorm/repository/BaseEntity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity("categorias")
  export class Categorias extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("text")
    name: string;
  }
  