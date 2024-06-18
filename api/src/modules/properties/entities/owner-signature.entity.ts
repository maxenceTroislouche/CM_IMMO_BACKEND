import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('signature_proprietaire')
export class OwnerSignature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'chemin'})
    path: string;

    @Column({ name: 'date_signature'})
    date: Date;

    @Column({ name: 'id_edl' })
    inventoryId: number;

    @Column({ name: 'id_proprietaire' })
    ownerId: number;
}