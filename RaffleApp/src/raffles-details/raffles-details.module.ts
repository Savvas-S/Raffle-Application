import { Module } from '@nestjs/common';
import { RafflesDetailsController } from './raffles-details.controller';
import { RafflesDetailsService } from './raffles-details.service';

@Module({
  controllers: [RafflesDetailsController],
  providers: [RafflesDetailsService]
})
export class RafflesDetailsModule {}
