import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm'
import { Users } from 'src/users/user.entity'

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  location_id: number

  @Column()
  country: string
  
  @Column()
  city: string

  @Column()
  state: string

  @Column()
  street: string

  @Column()
  zip_code: number

  @OneToOne(() => Users, user => user.location,{onDelete:"CASCADE"})
  @JoinColumn()
  user: Users
}