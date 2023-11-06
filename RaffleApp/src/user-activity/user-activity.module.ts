import { Module } from '@nestjs/common';
import { UserActivityController } from './user-activity.controller';

@Module({
  controllers: [UserActivityController]
})
export class UserActivityModule {}
