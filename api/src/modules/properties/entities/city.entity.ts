import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity('ville')
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code_postal'})
    postalCode: number;

    @Column({ name: 'nom'})
    name: string;

    @OneToMany(() => Property, property => property.city)
    properties: Property[];
}