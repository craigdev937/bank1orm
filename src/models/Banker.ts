import { Entity, Column } from "typeorm";
import { Person } from "./Person";

@Entity({name: "bankers"})
export class Banker extends Person {
    @Column({unique: true, length: 10}) 
    employee_number: string;
};




