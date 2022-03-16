import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Persons')
export class Persons extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    PersonID: number;
    @Column({
        type: 'varchar'
    })
    LastName: string;
    @Column({
        type: 'varchar'
    })
    FirstName: string;
    @Column({
        type: 'varchar'
    })
    Address: string;

    @Column({
        type: 'varchar'
    })
    City:string ;
}