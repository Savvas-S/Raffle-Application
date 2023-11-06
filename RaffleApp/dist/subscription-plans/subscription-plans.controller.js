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
exports.SubscriptionPlansController = void 0;
const common_1 = require("@nestjs/common");
const subscription_plans_service_1 = require("./subscription-plans.service");
const subscriptionPlans_Dto_1 = require("./dto/subscriptionPlans-Dto");
let SubscriptionPlansController = class SubscriptionPlansController {
    constructor(spService) {
        this.spService = spService;
    }
    async create_plan(body) {
        return this.spService.create_subscriptionPlan(body.plan_name, body.price, body.features);
    }
    async modify_plan(body) {
        return await this.spService.modify_plan(body.plan_name, body.price, body.features);
    }
    async get_allSp() {
        return this.spService.get_allPlans();
    }
    async get_Sp(plan_name) {
        return this.spService.getPlanbyName(plan_name);
    }
    async delete_plan(plan_name) {
        return await this.spService.delete_subscriptionPlan(plan_name);
    }
};
__decorate([
    common_1.Post('create_subscriptionPlan'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscriptionPlans_Dto_1.SubscriptionPlanDto]),
    __metadata("design:returntype", Promise)
], SubscriptionPlansController.prototype, "create_plan", null);
__decorate([
    common_1.Post('modify_subscriptionPlan'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscriptionPlans_Dto_1.SubscriptionPlanDto]),
    __metadata("design:returntype", Promise)
], SubscriptionPlansController.prototype, "modify_plan", null);
__decorate([
    common_1.Get('get_allSubscriptionPlans'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriptionPlansController.prototype, "get_allSp", null);
__decorate([
    common_1.Get('get_SubscriptionPlan/:plan_name'),
    __param(0, common_1.Param("plan_name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionPlansController.prototype, "get_Sp", null);
__decorate([
    common_1.Delete('delete_subscriptionPlan/:plan_name'),
    __param(0, common_1.Param('plan_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionPlansController.prototype, "delete_plan", null);
SubscriptionPlansController = __decorate([
    common_1.Controller('subscription-plans'),
    __metadata("design:paramtypes", [subscription_plans_service_1.SubscriptionPlansService])
], SubscriptionPlansController);
exports.SubscriptionPlansController = SubscriptionPlansController;
//# sourceMappingURL=subscription-plans.controller.js.map