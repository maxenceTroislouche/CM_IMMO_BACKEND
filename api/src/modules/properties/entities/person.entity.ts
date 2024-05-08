import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PersonType } from "./person-type.entity";
import { Property } from "./property.entity";
import { Contract } from "./contract.entity";

@Entity('tiers')
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nom'})
    lastname: string;

    @Column({ name: 'prenom'})
    firstname: string;

    @Column({ name: 'date_de_naissance'})
    birthDate: Date;

    @Column({ name: 'numero_securite_sociale'})
    socialSecurityNumber: string;

    @Column({ name: 'rib'})
    rib: string;

    @ManyToOne(() => PersonType, personType => personType.persons, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_type_tiers'})
    personType: PersonType;

    @OneToMany(() => Property, property => property.owner, { onDelete: 'CASCADE' })
    properties: Property[];

    @OneToMany(() => Contract, contract => contract.renter, { onDelete: 'CASCADE' })
    contractsAsRenter: Property[];

    @OneToMany(() => Contract, contract => contract.owner, { onDelete: 'CASCADE' })
    contractsAsOwner: Property[];
}