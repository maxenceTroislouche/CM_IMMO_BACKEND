import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contract } from "../../properties/entities/contract.entity";
import { EstateAgent } from "src/modules/estateAgents/entities/estateAgent.entity";
import { Minute } from "./minute.entity";

@Entity('etat_des_lieux')
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Contract, contract => contract.inventories, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_bail' })
    contract: Contract;

    @ManyToOne(() => EstateAgent, estateAgent => estateAgent.inventories, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_agent' })
    estateAgent: EstateAgent;

    @Column({ name: 'est_entrant'})
    isStartingInventory: boolean;
    
    @Column({ name: 'date_realisation'})
    date: Date;

    @Column({ name: 'avancement' })
    progress: number;

    @OneToMany(() => Minute, minute => minute.review, { onDelete: 'CASCADE' })
    minutes: Minute[];

}