import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Element } from "./element.entity";

@Entity('type_element')
export class ElementType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lib' })
    lib: string;

    @Column({ name: 'data_obligatoire', type: 'json' })
    mandatoryData: any;

    @OneToMany(() => Element, element => element.elementType, { onDelete: 'CASCADE' })
    elements: Element[];
}