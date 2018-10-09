import { BaseEntity } from "typeorm/repository/BaseEntity";

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
export class Categories extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  name: string;
}
