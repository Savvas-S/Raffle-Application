import { UserSubscription } from 'src/subscription/subscription.entity'
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToMany, ManyToOne} from 'typeorm'

@Entity()
export class SubscriptionPlan{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique:true
    })
    plan_name: string

    @Column('decimal', { precision: 3, scale: 2 })
    price: number

    @Column()
    features: string

    @OneToMany(() => UserSubscription, usersubscription => usersubscription.sub_plan, {onDelete:"CASCADE"})
    @JoinColumn()
    usersubscription: UserSubscription;


}