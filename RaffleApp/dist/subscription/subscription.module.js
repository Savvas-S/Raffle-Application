"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const subscription_controller_1 = require("./subscription.controller");
const subscription_service_1 = require("./subscription.service");
const subscription_entity_1 = require("./subscription.entity");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const user_entity_1 = require("../users/user.entity");
const subscription_plans_entity_1 = require("../subscription-plans/subscription-plans.entity");
const subscription_plans_service_1 = require("../subscription-plans/subscription-plans.service");
const role_entity_1 = require("../role/role.entity");
let SubscriptionModule = class SubscriptionModule {
};
SubscriptionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([subscription_entity_1.UserSubscription, user_entity_1.Users, subscription_plans_entity_1.SubscriptionPlan, role_entity_1.Role])],
        controllers: [subscription_controller_1.SubscriptionController],
        providers: [subscription_service_1.SubscriptionService, users_service_1.UsersService, subscription_plans_service_1.SubscriptionPlansService],
    })
], SubscriptionModule);
exports.SubscriptionModule = SubscriptionModule;
//# sourceMappingURL=subscription.module.js.map