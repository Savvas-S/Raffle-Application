import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Users} from 'src/users/user.entity';
import { SubscriptionPlan } from 'src/subscription-plans/subscription-plans.entity';


@Entity()
export class UserSubscription {
  @PrimaryGeneratedColumn()
  subscription_id: number

  @CreateDateColumn({nullable:true})
  subscription_startDate: Date

  @CreateDateColumn({nullable:true})
  subscription_endtDate: Date
  
  @Column()
  status: boolean

  @OneToOne(() => Users, user => user.subscription, {onDelete:"CASCADE"})
  @JoinColumn()
  user: Users;


  @ManyToOne(() => SubscriptionPlan, sub_plan => sub_plan.usersubscription, {cascade:true, onDelete:"CASCADE"}) 
  sub_plan: SubscriptionPlan;


}