import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bookings } from "./bookings.entity";

@Entity('bookingStatus')
export class BookingStatus extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;

    @Column({
        type: 'varchar'
    })
    name: string;

    @Column({
        type: 'varchar'
    })
    description: string;
    @Column({
        type: 'bit'
    })
    active: boolean;
    
    
}