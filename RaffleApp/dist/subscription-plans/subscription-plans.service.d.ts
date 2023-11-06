import { SubscriptionPlan } from './subscription-plans.entity';
import { Repository } from 'typeorm';
export declare class SubscriptionPlansService {
    private repo;
    constructor(repo: Repository<SubscriptionPlan>);
    get_allPlans(): Promise<SubscriptionPlan[]>;
    getPlanById(id: number): Promise<SubscriptionPlan>;
    getPlanbyName(plan_name: string): Promise<SubscriptionPlan>;
    create_subscriptionPlan(plan_name: string, price: number, features: string): Promise<SubscriptionPlan>;
    modify_plan(plan_name: string, price: number, features: string): Promise<SubscriptionPlan | {
        error: any;
    }>;
    delete_subscriptionPlan(plan_name: string): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
    }>;
}
