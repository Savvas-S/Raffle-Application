"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const categories_module_1 = require("./categories/categories.module");
const categories_name_module_1 = require("./categories-name/categories-name.module");
const device_information_module_1 = require("./device-information/device-information.module");
const location_module_1 = require("./location/location.module");
const raffles_details_module_1 = require("./raffles-details/raffles-details.module");
const raffles_favorites_module_1 = require("./raffles-favorites/raffles-favorites.module");
const subscription_module_1 = require("./subscription/subscription.module");
const subscription_plans_module_1 = require("./subscription-plans/subscription-plans.module");
const transaction_history_module_1 = require("./transaction-history/transaction-history.module");
const user_activity_module_1 = require("./user-activity/user-activity.module");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const role_module_1 = require("./role/role.module");
const typeorm_config_1 = require("./typeorm.config");
const core_1 = require("@nestjs/core");
const cookieSession = require('cookie-session');
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(cookieSession({
            keys: ['asdfasfd'],
        })).forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [categories_module_1.CategoriesModule, categories_name_module_1.CategoriesNameModule, device_information_module_1.DeviceInformationModule,
            location_module_1.LocationModule, raffles_details_module_1.RafflesDetailsModule, raffles_favorites_module_1.RafflesFavoritesModule,
            subscription_module_1.SubscriptionModule, subscription_plans_module_1.SubscriptionPlansModule, transaction_history_module_1.TransactionHistoryModule,
            users_module_1.UsersModule, user_activity_module_1.UserActivityModule,
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.default),
            role_module_1.RoleModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useValue: new common_1.ValidationPipe({
                    whitelist: true,
                }),
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map