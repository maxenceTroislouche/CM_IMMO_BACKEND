import { Review } from 'src/modules/reviews/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agent')
export class EstateAgent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_utilisateur', unique: true })
  username: string;

  @Column({ name: 'mot_de_passe' })
  password: string;

  @OneToMany(() => Review, review => review.estateAgent)
  reviews: Review[];
}
