import { BaseEntity } from 'typeorm/repository/BaseEntity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm'

@Entity("persons")
export class Person extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text")
    name: string

    @Column("text")
    lastName: string

    @Column("smallint")
    age: number

}