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
exports.SubscriptionPlansService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subscription_plans_entity_1 = require("./subscription-plans.entity");
const typeorm_2 = require("typeorm");
let SubscriptionPlansService = class SubscriptionPlansService {
    constructor(repo) {
        this.repo = repo;
    }
    async get_allPlans() {
        return this.repo.find();
    }
    async getPlanById(id) {
        return this.repo.findOneBy({ id });
    }
    async getPlanbyName(plan_name) {
        const plan = await this.repo.findOneBy({ plan_name });
        if (!plan) {
            throw new common_1.BadRequestException('Plan does not exists');
        }
        return plan;
    }
    async create_subscriptionPlan(plan_name, price, features) {
        const plan = await this.repo.findOneBy({ plan_name });
        if (plan) {
            throw new common_1.BadRequestException('Plan already exists');
        }
        const new_plan = this.repo.create({ plan_name, price, features });
        return this.repo.save(new_plan);
    }
    async modify_plan(plan_name, price, features) {
        try {
            const existingPlan = await this.repo.findOneBy({ plan_name });
            if (!existingPlan) {
                throw new common_1.NotFoundException('Plan not found');
            }
            existingPlan.price = price;
            existingPlan.features = features;
            return this.repo.save(existingPlan);
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async delete_subscriptionPlan(plan_name) {
        try {
            const existingPlan = await this.repo.findOneBy({ plan_name });
            if (!existingPlan) {
                throw new common_1.NotFoundException('Plan not found');
            }
            await this.repo.remove(existingPlan);
            return { message: 'Plan deleted successfully' };
        }
        catch (error) {
            return { error: error.message };
        }
    }
};
SubscriptionPlansService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(subscription_plans_entity_1.SubscriptionPlan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubscriptionPlansService);
exports.SubscriptionPlansService = SubscriptionPlansService;
//# sourceMappingURL=subscription-plans.service.js.map