import { UserSubscription } from 'src/subscription/subscription.entity';
export declare class SubscriptionPlan {
    id: number;
    plan_name: string;
    price: number;
    features: string;
    usersubscription: UserSubscription;
}
