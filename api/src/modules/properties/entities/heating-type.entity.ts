import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity('type_chauffage')
export class HeatingType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lib'})
    lib: string;

    @OneToMany(() => Property, property => property.heatingType, { onDelete: 'CASCADE' })
    properties: Property[];
}