import { Test, TestingModule } from '@nestjs/testing';
import { RafflesFavoritesController } from './raffles-favorites.controller';

describe('RafflesFavoritesController', () => {
  let controller: RafflesFavoritesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RafflesFavoritesController],
    }).compile();

    controller = module.get<RafflesFavoritesController>(RafflesFavoritesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
