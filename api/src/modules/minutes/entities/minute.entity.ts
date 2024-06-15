import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Element } from "../../inventories/entities/element.entity";
import { Inventory } from "../../inventories/entities/inventory.entity";

@Entity('minute')
export class Minute {
    @PrimaryColumn()
    id_edl: number;

    @PrimaryColumn()
    id_element: number;

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