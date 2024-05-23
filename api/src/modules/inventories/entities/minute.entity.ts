import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Element } from "./element.entity";
import { Inventory } from "./inventory.entity";

@Entity('minute')
export class Minute {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Element, element => element.minutes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_element' })
    element: Element;

    @ManyToOne(() => Inventory, review => review.minutes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_edl' })
    review: Inventory;

    @Column({ name: 'photos', array: true, type: 'text', nullable: true })
    photos: number[];

    @Column({ name: 'remarque' })
    remark: string;

    @Column({ name: 'note' })
    grade: number;
}