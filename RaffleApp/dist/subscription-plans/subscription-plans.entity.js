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
exports.SubscriptionPlan = void 0;
const subscription_entity_1 = require("../subscription/subscription.entity");
const typeorm_1 = require("typeorm");
let SubscriptionPlan = class SubscriptionPlan {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SubscriptionPlan.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        unique: true
    }),
    __metadata("design:type", String)
], SubscriptionPlan.prototype, "plan_name", void 0);
__decorate([
    typeorm_1.Column('decimal', { precision: 3, scale: 2 }),
    __metadata("design:type", Number)
], SubscriptionPlan.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubscriptionPlan.prototype, "features", void 0);
__decorate([
    typeorm_1.OneToMany(() => subscription_entity_1.UserSubscription, usersubscription => usersubscription.sub_plan, { onDelete: "CASCADE" }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", subscription_entity_1.UserSubscription)
], SubscriptionPlan.prototype, "usersubscription", void 0);
SubscriptionPlan = __decorate([
    typeorm_1.Entity()
], SubscriptionPlan);
exports.SubscriptionPlan = SubscriptionPlan;
//# sourceMappingURL=subscription-plans.entity.js.map