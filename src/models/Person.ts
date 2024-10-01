import { PrimaryGeneratedColumn, BaseEntity, 
    Entity, Column, CreateDateColumn, 
    UpdateDateColumn } from "typeorm";

@Entity()
export class Person extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() firstName: string;
    @Column() lastName: string;
    @Column({unique: true}) email: string;
    @Column({unique: true, 
        length: 10}) card_number: string;
    @CreateDateColumn() created_at: Date;
    @UpdateDateColumn() updated_at: Date;
};




