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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSubscription = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const subscription_plans_entity_1 = require("../subscription-plans/subscription-plans.entity");
let UserSubscription = class UserSubscription {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserSubscription.prototype, "subscription_id", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ nullable: true }),
    __metadata("design:type", Date)
], UserSubscription.prototype, "subscription_startDate", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ nullable: true }),
    __metadata("design:type", Date)
], UserSubscription.prototype, "subscription_endtDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], UserSubscription.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.Users, user => user.subscription, { onDelete: "CASCADE" }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.Users)
], UserSubscription.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => subscription_plans_entity_1.SubscriptionPlan, sub_plan => sub_plan.usersubscription, { cascade: true, onDelete: "CASCADE" }),
    __metadata("design:type", subscription_plans_entity_1.SubscriptionPlan)
], UserSubscription.prototype, "sub_plan", void 0);
UserSubscription = __decorate([
    typeorm_1.Entity()
], UserSubscription);
exports.UserSubscription = UserSubscription;
//# sourceMappingURL=subscription.entity.js.map