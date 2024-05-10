import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.entity";
import { City } from "./city.entity";
import { PropertyType } from "./property-type.entity";
import { HeatingType } from "./heating-type.entity";
import { WaterHeatingType } from "./water-heating-type.entity";
import { Photo } from "./photo.entity";
import { Contract } from "./contract.entity";
import { Room } from "./room.entity";

@Entity('bien')
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'num_rue' })
    streetNumber: number;

    @Column({ name: 'nom_rue' })
    streetName: string;

    @Column({ name: 'longitude', type: "double precision" })
    longitude: number;

    @Column({ name: 'latitude', type: "double precision" })
    latitude: number;

    @Column({ name: 'etage' })
    floor: number;

    @Column({ name: 'num_appartement' })
    flatNumber: number;

    @Column({ name: 'date_creation' })
    creationDate: Date;

    @Column({ name: 'classification_taille' })
    classification: string;

    @Column({ name: 'surface_habitable' })
    livingArea: number;

    @Column({ name: 'description' })
    description: string;

    // Relations
    @ManyToOne(() => Person, person => person.properties, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_proprietaire' })
    owner: Person;

    @ManyToOne(() => City, city => city.properties, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_ville' })
    city: City;

    @ManyToOne(() => PropertyType, propertyType => propertyType.properties, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_type_bien' })
    propertyType: PropertyType;

    @ManyToOne(() => HeatingType, heatingType => heatingType.properties, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_type_chauffage' })
    heatingType: HeatingType;

    @ManyToOne(() => WaterHeatingType, waterHeatingType => waterHeatingType.properties, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_type_eau_chaude' })
    waterHeatingType: WaterHeatingType;

    @Column({ name: 'photos', array: true, type: 'text', nullable: true })
    // Cas particulier: chaque élément du tableau correspond à l'id de la photo dans la table photo
    photos: string[];

    @OneToMany(() => Contract, contract => contract.property, { onDelete: 'CASCADE' })
    contracts: Contract[];

    @OneToMany(() => Room, room => room.property, { onDelete: 'CASCADE' })
    rooms: Room[];
}
