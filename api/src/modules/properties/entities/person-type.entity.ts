import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";

@Entity('type_tiers')
export class PersonType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lib'})
    lib: string;

    @OneToMany(() => Person, person => person.personType, { onDelete: 'CASCADE' })
    persons: Person[];
}