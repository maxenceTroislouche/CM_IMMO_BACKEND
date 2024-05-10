import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room.entity";


@Entity('type_piece')
export class RoomType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lib'})
    lib: string;

    @OneToMany(() => Room, room => room.roomType, { onDelete: 'CASCADE' })
    rooms: Room[];
}