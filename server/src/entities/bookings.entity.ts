import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { BookingStatus } from './bookingstatus.entity'
import { BookingType } from './bookingtype.entity'

@Entity('bookings')
export class Bookings extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;

    @Column({
        type: 'varchar'
    })
    userId: string;
    @Column({
        type: 'date'
    })
    date: Date;
    @Column({
        type: 'varchar'
    })
    docId: string;

    @Column({
        type: 'varchar'
    })
    description:string ;
    // @Column({
    //     type: 'varchar'
    // })
    // statusId:string ;
    // @Column({
    //     type: 'varchar'
    // })
    // bookingTypeId:string ;

    @OneToOne(() => BookingStatus, statusID => statusID.id) // specify inverse side as a second parameter
    statusId: BookingStatus;

    @OneToOne(() => BookingType, bookId => bookId.id) // specify inverse side as a second parameter
    bookingTypeId: BookingType;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}