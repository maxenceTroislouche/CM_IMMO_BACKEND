import { Room } from "src/modules/properties/entities/room.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ElementType } from "./element-type.entity";
import { Minute } from "../../minutes/entities/minute.entity";

@Entity('element')
export class Element {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Element, element => element.childElements, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_element_parent' })
    parentElement: Element;

    @OneToMany(() => Element, element => element.parentElement, { onDelete: 'CASCADE' })
    childElements: Element[];

    @ManyToOne(() => ElementType, elementType => elementType.elements, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_type_element' })
    elementType: ElementType;

    @ManyToOne(() => Room, room => room.elements, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_piece' })
    room: Room;

    @Column({ name: 'numero' })
    number: number;

    @Column({ name: 'description', type: 'json' })
    description: any;

    @OneToMany(() => Minute, minute => minute.element, { onDelete: 'CASCADE' })
    minutes: Minute[];
}