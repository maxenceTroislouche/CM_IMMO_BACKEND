import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";
import { RoomType } from "./room-type.entity";
import { RoomRole } from "./room-role.entity";
import { Element } from "src/modules/inventories/entities/element.entity";


@Entity('piece')
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'numero' })
    number: number;

    @Column({ name: 'description' })
    description: string;

    @Column({ name: 'surface' })
    area: number;

    @ManyToOne(() => Property, property => property.rooms, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "id_bien" })
    property: Property

    @ManyToOne(() => RoomType, roomType => roomType.rooms, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "id_type_piece" })
    roomType: RoomType

    @ManyToOne(() => RoomRole, roomRole => roomRole.rooms, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "id_fonction_piece" })
    roomRole: RoomRole

    @OneToMany(() => Element, element => element.room, { onDelete: 'CASCADE' })
    elements: Element[];
}