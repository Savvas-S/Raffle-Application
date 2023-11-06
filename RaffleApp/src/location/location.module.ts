import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Users } from 'src/users/user.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Location, Users])],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
