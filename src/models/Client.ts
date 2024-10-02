import { Entity, Column, OneToMany, ManyToMany } from "typeorm";
import { Person } from "./Person";
import { Transaction } from "./Transactions";
import { Banker } from "./Banker";

@Entity({name: "clients"})
export class Client extends Person {    
    @Column({type: "numeric"}) balance: number;
    @Column({default: true, 
        name: "active"}) is_active: boolean;
    @Column({type: "simple-json", 
        nullable: true}) additional_info: {
        age: number,
        hair_color: string
    };
    @Column({type: "simple-array", 
        default: []}) family_members: string[];
    @OneToMany(() => Transaction, 
    (trans) => trans.client) trans: Transaction[];
    @ManyToMany(() => Banker) bankers: Banker[];
};



