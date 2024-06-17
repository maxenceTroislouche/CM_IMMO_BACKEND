import { Collection, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Element } from "./element.entity";
import { Property } from "src/modules/properties/entities/property.entity";
import { ThirdType } from "./third-type.entity";

@Entity('tiers')
export class Third {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => ThirdType, (thirdType) => thirdType)
    // @JoinColumn({ name: 'id_type_tiers' })
    // thirdType: ThirdType;
    
    @Column({ name : 'id_type_tiers'})
    idType: number;

    @Column({ name : 'prenom'})
    firstName: string;

    @Column({ name : 'nom'})
    lastName: string;

    @Column({ name : 'date_de_naissance'})
    birthDate: string;

    @Column({ name : 'numero_securite_sociale'})
    socialSecurityNumber: string;

    @Column({ name : 'rib'})
    rib: string;

}