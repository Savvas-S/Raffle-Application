import { Module } from '@nestjs/common';
import { SubscriptionPlansController } from './subscription-plans.controller';
import { SubscriptionPlansService } from './subscription-plans.service';
import { SubscriptionPlan } from './subscription-plans.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriptionPlan])],
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService]
})
export class SubscriptionPlansModule {}
