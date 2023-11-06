import { SubscriptionService } from './subscription.service';
import { UserSubscriptionDto } from './dtos/subscription.dto';
export declare class SubscriptionController {
    private userSubscriptionService;
    constructor(userSubscriptionService: SubscriptionService);
    createSub(user_id: number, plan_name: string, body: UserSubscriptionDto): Promise<import("./subscription.entity").UserSubscription | {
        error: any;
    }>;
    getUserSub(user_id: number): Promise<import("./subscription.entity").UserSubscription[]>;
    updateSub(user_id: number, plan_name: string, body: Partial<UserSubscriptionDto>): Promise<import("typeorm").UpdateResult>;
}
