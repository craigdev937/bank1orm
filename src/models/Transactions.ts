import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn, ManyToOne, 
    JoinColumn} from "typeorm";
import { Client } from "./Client";

export enum TransType {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw"
};

@Entity({name: "transactions"})
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column({ type: "enum", 
        enum: TransType }) type: string;
    @Column({type: "numeric"}) amount: number;

    @ManyToOne(() => Client, (client) => client.transactions)
    @JoinColumn({name: "client_id"}) client: Client;
};


