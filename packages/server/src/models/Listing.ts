import { BaseEntity } from 'typeorm/repository/BaseEntity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("listings")
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("text", { nullable: true })
  pictureUrl: string;

  @Column("varchar", { length: 100 })
  category: string;

  @Column("int")
  price: number;

  @Column("double precision")
  latitude: number;

  @Column("double precision")
  longitude: number;

  @Column("text", { array: true })
  amenities: string[];

  @Column("uuid")
  userId: string;

  @ManyToOne(() => User, user => user.listings)
  user: User;
}
