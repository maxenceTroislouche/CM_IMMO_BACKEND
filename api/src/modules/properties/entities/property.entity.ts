import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('bien')
export class Property {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'id_proprietaire'})
    ownerId:number;

    @Column({ name: 'id_ville'})
    cityId:number;

    @Column({ name: 'id_type_bien'})
    propertyTypeId:number;

    @Column({ name: 'id_type_chauffage'})
    heatingTypeId:number;

    @Column({ name: 'id_type_eau_chaude'})
    hotWaterTypeId:number;

    @Column({ name: 'num_rue'})
    streetNumber:number;

    @Column({ name: 'nom_rue'})
    streetName:string;

    @Column({ name: 'longitude'})
    longitude:number;

    @Column({ name: 'latitude'})
    latitude:number;

    @Column({ name: 'etage'})
    floor:number;

    @Column({ name: 'num_appartement'})
    flatNumber:number;

    @Column({ name: 'date_creation'})
    creationDate:number;

    @Column({ name: 'classification_taille'})
    classification:string;

    @Column({ name: 'surface_habitable'})
    livingArea:number;

    @Column({ name: 'description'})
    description:string;

    @Column("text", { name: 'photos', array: true })
    photos:string[];

}
