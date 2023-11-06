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
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("./subscription.service");
const subscription_dto_1 = require("./dtos/subscription.dto");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const epxosesubscription_dto_1 = require("./dtos/epxosesubscription.dto");
let SubscriptionController = class SubscriptionController {
    constructor(userSubscriptionService) {
        this.userSubscriptionService = userSubscriptionService;
    }
    async createSub(user_id, plan_name, body) {
        try {
            return this.userSubscriptionService.createSubscription(user_id, body.start_date, body.end_date, body.status, plan_name);
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async getUserSub(user_id) {
        return this.userSubscriptionService.find_Usersubscription(user_id);
    }
    async updateSub(user_id, plan_name, body) {
        return this.userSubscriptionService.update_userSubscription(user_id, plan_name);
    }
};
__decorate([
    common_1.Post('/create_usersubscription/:user_id/:plan_name'),
    __param(0, common_1.Param("user_id")), __param(1, common_1.Param("plan_name")), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, subscription_dto_1.UserSubscriptionDto]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "createSub", null);
__decorate([
    common_1.Get('find_Usersubscription/:user_id'),
    __param(0, common_1.Param('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getUserSub", null);
__decorate([
    common_1.Post('update_usersubscription/:user_id/:plan_name'),
    __param(0, common_1.Param("user_id")), __param(1, common_1.Param("plan_name")), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "updateSub", null);
SubscriptionController = __decorate([
    common_1.Controller('subscription'),
    serialize_interceptor_1.Serialize(epxosesubscription_dto_1.ExposeSubscriptionDto),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService])
], SubscriptionController);
exports.SubscriptionController = SubscriptionController;
//# sourceMappingURL=subscription.controller.js.map