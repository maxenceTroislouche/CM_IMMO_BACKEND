import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room.entity";


@Entity('fonction_piece')
export class RoomRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lib'})
    lib: string;

    @OneToMany(() => Room, room => room.roomType, { onDelete: 'CASCADE' })
    rooms: Room[];
}