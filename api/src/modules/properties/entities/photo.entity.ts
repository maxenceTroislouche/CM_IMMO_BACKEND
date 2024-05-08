import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('photo')
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'chemin'})
    path: string;
}