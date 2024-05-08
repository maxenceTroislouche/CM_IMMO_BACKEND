import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity('type_bien')
export class PropertyType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lib'})
    lib: string;

    @OneToMany(() => Property, property => property.propertyType, { onDelete: 'CASCADE' })
    properties: Property[];
}