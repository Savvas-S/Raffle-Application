import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Location } from 'src/location/location.entity';
import { UserSubscription } from 'src/subscription/subscription.entity';
import { Role } from 'src/role/role.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number
  @Column()
  name: string
  @Column()
  surname: string
  @Column({unique:true})
  email: string
  @Column()
  username: string
  @Column()
  password: string
  @Column()
  contact_number: number 
  @Column()
  gender: string
  @Column({
    type: 'date',
    nullable: true
  })
  date_of_birth: Date | null

  @CreateDateColumn()
  timestamp: string
  
  @OneToOne(() => Location, location => location.user, {cascade:true, onDelete:"CASCADE"}) 
  location: Location;

  @OneToOne(() => UserSubscription, subscription => subscription.user, {cascade:true, onDelete:"CASCADE"}) 
  subscription: UserSubscription;

  @OneToOne(() => Role, role => role.user, {onDelete:"CASCADE"})
  @JoinColumn()
  role: Role
}
