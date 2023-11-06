"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const subscription_entity_1 = require("./subscription.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const subscription_plans_entity_1 = require("../subscription-plans/subscription-plans.entity");
const subscription_plans_service_1 = require("../subscription-plans/subscription-plans.service");
let SubscriptionService = class SubscriptionService {
    constructor(subscriptionRepository, planRepository, spService, usersService) {
        this.subscriptionRepository = subscriptionRepository;
        this.planRepository = planRepository;
        this.spService = spService;
        this.usersService = usersService;
    }
    async createSubscription(user_id, subscription_startDate, subscription_endtDate, status, plan_name) {
        try {
            const user = await this.usersService.getUserbyId(user_id);
            if (!user) {
                throw new common_1.BadRequestException('Unable to update account of a non-registered user.');
            }
            const plan = await this.spService.getPlanbyName(plan_name);
            if (!plan) {
                throw new common_1.BadRequestException('Incorrect Plan provided');
            }
            const new_sub = this.subscriptionRepository.create({ subscription_startDate, subscription_endtDate, status });
            new_sub.user = user;
            new_sub.sub_plan = plan;
            return this.subscriptionRepository.save(new_sub);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async find_Usersubscription(user_id) {
        const user_subscription = await this.subscriptionRepository
            .createQueryBuilder('subscription')
            .leftJoinAndSelect('subscription.user', 'user')
            .leftJoinAndSelect('subscription.sub_plan', 'sub_plan')
            .where('user.user_id = :id', { id: user_id })
            .getMany();
        if (user_subscription.length === 0) {
            throw new common_1.NotFoundException('User does not have an active subscription Plan');
        }
        return user_subscription;
    }
    async update_userSubscription(user_id, plan_name) {
        const planname = await this.planRepository.findOneBy({ plan_name });
        const user = await this.subscriptionRepository.createQueryBuilder().update().set({
            sub_plan: planname, subscription_startDate: () => 'CURRENT_DATE', subscription_endtDate: () => `CURRENT_DATE + INTERVAL '1.05 month'`
        }).where("userUserId = :id", { id: user_id }).execute();
        return user;
    }
};
SubscriptionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(subscription_entity_1.UserSubscription)),
    __param(1, typeorm_2.InjectRepository(subscription_plans_entity_1.SubscriptionPlan)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        subscription_plans_service_1.SubscriptionPlansService,
        users_service_1.UsersService])
], SubscriptionService);
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map