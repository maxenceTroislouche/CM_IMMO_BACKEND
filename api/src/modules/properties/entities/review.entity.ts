import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contract } from "./contract.entity";
import { EstateAgent } from "src/modules/estateAgents/entities/estateAgent.entity";

@Entity('etat_des_lieux')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Contract, contract => contract.reviews, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_bail' })
    contract: Contract;

    @ManyToOne(() => EstateAgent, estateAgent => estateAgent.reviews, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_agent' })
    estateAgent: EstateAgent;

    @Column({ name: 'est_entrant'})
    isStartingReview: boolean;

    @Column({ name: 'date_realisation'})
    date: Date;

    @Column({ name: 'avancement' })
    progress: number;
}