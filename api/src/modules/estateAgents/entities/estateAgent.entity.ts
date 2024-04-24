import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agent')
export class EstateAgent {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'nom_utilisateur', unique: true })
  username: string;

  @Column({ name: 'mot_de_passe' })
  password: string;
}
