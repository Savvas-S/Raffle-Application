import { Users } from 'src/users/user.entity';
import { SubscriptionPlan } from 'src/subscription-plans/subscription-plans.entity';
export declare class UserSubscription {
    subscription_id: number;
    subscription_startDate: Date;
    subscription_endtDate: Date;
    status: boolean;
    user: Users;
    sub_plan: SubscriptionPlan;
}
