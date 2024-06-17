import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contract } from "../../properties/entities/contract.entity";
import { Minute } from "./minute.entity";

@Entity('etat_des_lieux')
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Contract, (contract) => contract.inventories, { cascade:true})
    @JoinColumn({ name: 'id_bail' })
    contract: Contract;

    @Column({ name: 'id_agent' })
    estateAgentId: number;

    @Column({ name: 'est_entrant'})
    isStartingInventory: boolean;
    
    @Column({ name: 'date_realisation'})
    date: Date;

    @Column({ name: 'avancement' })
    progress: number;
    
    @OneToMany(() => Minute, minute => minute.review, { onDelete: 'CASCADE' })
    minutes: Minute[];

    //TODO List of old images (can be null if it is the first estate)
    //TODO List of rooms in order
    //TODO List Elements in a room

}