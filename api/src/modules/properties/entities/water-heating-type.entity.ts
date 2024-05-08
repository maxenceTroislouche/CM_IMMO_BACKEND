import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity('type_eau_chaude')
export class WaterHeatingType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lib'})
    lib: string;

    @OneToMany(() => Property, property => property.waterHeatingType, { onDelete: 'CASCADE' })
    properties: Property[];
}