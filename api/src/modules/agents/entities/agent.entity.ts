import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('agent')
export class Agent {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    utilisateur: string;

    @Column()
    mot_de_passe: string;

}