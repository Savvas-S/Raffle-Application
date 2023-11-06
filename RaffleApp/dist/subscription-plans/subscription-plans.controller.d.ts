import { SubscriptionPlansService } from './subscription-plans.service';
import { SubscriptionPlanDto } from './dto/subscriptionPlans-Dto';
export declare class SubscriptionPlansController {
    private spService;
    constructor(spService: SubscriptionPlansService);
    create_plan(body: SubscriptionPlanDto): Promise<import("./subscription-plans.entity").SubscriptionPlan>;
    modify_plan(body: SubscriptionPlanDto): Promise<import("./subscription-plans.entity").SubscriptionPlan | {
        error: any;
    }>;
    get_allSp(): Promise<import("./subscription-plans.entity").SubscriptionPlan[]>;
    get_Sp(plan_name: string): Promise<import("./subscription-plans.entity").SubscriptionPlan>;
    delete_plan(plan_name: string): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
    }>;
}
