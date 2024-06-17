import { Collection, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Element } from "./element.entity";
import { Property } from "src/modules/properties/entities/property.entity";

@Entity('type_tiers')
export class ThirdType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name : 'lib'})
    name: string;
}