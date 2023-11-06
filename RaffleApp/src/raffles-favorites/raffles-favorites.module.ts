import { Module } from '@nestjs/common';
import { RafflesFavoritesController } from './raffles-favorites.controller';
import { RafflesFavoritesService } from './raffles-favorites.service';

@Module({
  controllers: [RafflesFavoritesController],
  providers: [RafflesFavoritesService]
})
export class RafflesFavoritesModule {}
