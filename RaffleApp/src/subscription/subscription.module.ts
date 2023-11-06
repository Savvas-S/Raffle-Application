import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { UserSubscription } from './subscription.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/user.entity';
import { SubscriptionPlan } from 'src/subscription-plans/subscription-plans.entity';
import { SubscriptionPlansService } from 'src/subscription-plans/subscription-plans.service';
import { Role } from 'src/role/role.entity';


@Module({
  imports: [TypeOrmModule.forFeature([UserSubscription, Users, SubscriptionPlan, Role])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, UsersService, SubscriptionPlansService],

})
export class SubscriptionModule {}
