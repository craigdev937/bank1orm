import { Entity, Column, ManyToMany, 
    JoinTable } from "typeorm";
import { Person } from "./Person";
import { Client } from "./Client";

@Entity({name: "bankers"})
export class Banker extends Person {
    @Column({unique: true, 
        length: 10}) employee_number: string;
    @ManyToMany(() => Client) 
    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: "banker",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "client",
            referencedColumnName: "id"
        }
    }) clients: Client[];
};




