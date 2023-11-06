import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserSubscription } from './subscription.entity';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { SubscriptionPlan } from 'src/subscription-plans/subscription-plans.entity';
import { SubscriptionPlansService } from 'src/subscription-plans/subscription-plans.service';

@Injectable()
export class SubscriptionService {
    constructor(
        @InjectRepository(UserSubscription) private subscriptionRepository: Repository<UserSubscription>,
        @InjectRepository(SubscriptionPlan) private planRepository: Repository<SubscriptionPlan>,
        private spService: SubscriptionPlansService,
        private usersService: UsersService,
        ){}

        async createSubscription(user_id: number, subscription_startDate: Date, subscription_endtDate: Date, status: boolean, plan_name: string) {
            try {
                const user = await this.usersService.getUserbyId(user_id);
                if (!user) {
                    throw new BadRequestException('Unable to update account of a non-registered user.');
                }
                const plan = await this.spService.getPlanbyName(plan_name)
                if (!plan) {
                    throw new BadRequestException('Incorrect Plan provided');
                }
                const new_sub = this.subscriptionRepository.create({ subscription_startDate, subscription_endtDate, status });
                new_sub.user = user;
                new_sub.sub_plan = plan
                return this.subscriptionRepository.save(new_sub)
            } catch (error) {
                throw new Error(error);
            }
        }

        async find_Usersubscription(user_id: number) {
            const user_subscription = await this.subscriptionRepository
              .createQueryBuilder('subscription')
              .leftJoinAndSelect('subscription.user', 'user')
              .leftJoinAndSelect('subscription.sub_plan', 'sub_plan')
              .where('user.user_id = :id', { id: user_id })
              .getMany();

              if(user_subscription.length === 0){
                throw new NotFoundException('User does not have an active subscription Plan');
            }
            return user_subscription;
          }


        async update_userSubscription(user_id:number, plan_name:string){
            const planname = await this.planRepository.findOneBy({plan_name})
            const user = await this.subscriptionRepository.createQueryBuilder().update().set({ 
                sub_plan: planname, subscription_startDate: () => 'CURRENT_DATE', subscription_endtDate: () => `CURRENT_DATE + INTERVAL '1.05 month'`
             }).where("userUserId = :id", { id: user_id }).execute()
            return user
        }
        
}
