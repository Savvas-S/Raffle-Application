import { UserSubscription } from './subscription.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { SubscriptionPlan } from 'src/subscription-plans/subscription-plans.entity';
import { SubscriptionPlansService } from 'src/subscription-plans/subscription-plans.service';
export declare class SubscriptionService {
    private subscriptionRepository;
    private planRepository;
    private spService;
    private usersService;
    constructor(subscriptionRepository: Repository<UserSubscription>, planRepository: Repository<SubscriptionPlan>, spService: SubscriptionPlansService, usersService: UsersService);
    createSubscription(user_id: number, subscription_startDate: Date, subscription_endtDate: Date, status: boolean, plan_name: string): Promise<UserSubscription>;
    find_Usersubscription(user_id: number): Promise<UserSubscription[]>;
    update_userSubscription(user_id: number, plan_name: string): Promise<import("typeorm").UpdateResult>;
}
