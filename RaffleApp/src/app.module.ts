import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule} from './categories/categories.module';
import { CategoriesNameModule } from './categories-name/categories-name.module';
import { DeviceInformationModule} from './device-information/device-information.module';
import { LocationModule } from './location/location.module';
import { RafflesDetailsModule } from './raffles-details/raffles-details.module';
import { RafflesFavoritesModule } from './raffles-favorites/raffles-favorites.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionPlansModule } from './subscription-plans/subscription-plans.module';
import { TransactionHistoryModule } from './transaction-history/transaction-history.module';
import { UserActivityModule } from './user-activity/user-activity.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from './role/role.module';
import config from './typeorm.config';
import { APP_PIPE } from '@nestjs/core';
const cookieSession = require('cookie-session');


@Module({
  imports: [CategoriesModule, CategoriesNameModule, DeviceInformationModule, 
  LocationModule, RafflesDetailsModule, RafflesFavoritesModule,
  SubscriptionModule, SubscriptionPlansModule, TransactionHistoryModule,
  UsersModule, UserActivityModule,
  TypeOrmModule.forRoot(config),
  RoleModule
],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
  },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
        cookieSession({
          keys: ['asdfasfd'],
        }),
      ).forRoutes('*');
  }
}