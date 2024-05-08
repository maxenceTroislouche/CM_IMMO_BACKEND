import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";
import { Property } from "./property.entity";
import { Review } from "./review.entity";

@Entity('bail')
export class Contract {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Person, person => person.contractsAsRenter, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_locataire' })
    renter: Person;

    @ManyToOne(() => Person, person => person.contractsAsOwner, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_proprietaire' })
    owner: Person;

    @ManyToOne(() => Property, property => property.contracts, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_bien' })
    property: Property;

    @Column({ name: 'date_debut'})
    beginDate: Date;

    @Column({ name: 'date_fin'})
    endDate: Date;

    @Column({ name: 'nombre_cle'})
    numberOfKeys: number;

    @OneToMany(() => Review, review => review.contract, { onDelete: 'CASCADE' })
    reviews: Review[];
}