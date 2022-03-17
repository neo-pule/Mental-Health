import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";
import { User } from "./user.entity";
@Entity('userRole')
export class UserRole extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'unique key identifier'
    })
    id: number;
    // @Column({
    //     type: 'int'
    // })
    // role_id: number;
    // @Column({
    //     type: 'varchar2'
    // })
    // user_role_id: string;

    @OneToOne(() => Role, role => role.id) // specify inverse side as a second parameter
    @JoinColumn()
    role_id: Role;
    @OneToOne(() => User, user => user.uuid) // specify inverse side as a second parameter
    @JoinColumn()
    user_role_id: User;
}