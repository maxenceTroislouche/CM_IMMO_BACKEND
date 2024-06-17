import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Element } from './element.entity';
import { Property } from 'src/modules/properties/entities/property.entity';
import { Third } from './third.entity';

@Entity('bail')
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Third, (third) => third  )
  @JoinColumn({ name: 'id_locataire' })
  third: Third;

//   @ManyToOne(() => Third, (owner) => owner)
//   @JoinColumn({ name: 'id_propriétaire' })
//   owner: Third;

  @ManyToOne(() => Property, (property) => property)
  @JoinColumn({ name: 'id_bien' })
  property: Property;

  @Column({ name: 'date_debut' })
  start_date: string;

  @Column({ name: 'date_fin' })
  end_date: string;

  @Column({ name: 'nombre_clé' })
  numberKey: number;
  
}
