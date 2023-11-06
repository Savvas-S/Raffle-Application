import { Users } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';


@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    role_id: number

    @Column()
    role_name:string

    @OneToOne(() => Users, user => user.role, {cascade:true, onDelete:"CASCADE"})
    user: Users
    
}