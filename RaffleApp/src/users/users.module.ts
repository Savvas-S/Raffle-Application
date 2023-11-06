import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { UserSubscription } from 'src/subscription/subscription.entity';
import { Role } from 'src/role/role.entity';
import { APP_INTERCEPTOR} from '@nestjs/core';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { AppService } from 'src/app.service';

@Module({
    imports: [TypeOrmModule.forFeature([Users, UserSubscription, Role])],
    controllers:[UsersController],
    providers: [UsersService, AuthService, AppService,{ provide: APP_INTERCEPTOR, useClass:CurrentUserInterceptor },]
})

export class UsersModule {}