import { Test, TestingModule } from '@nestjs/testing';
import { RafflesFavoritesService } from './raffles-favorites.service';

describe('RafflesFavoritesService', () => {
  let service: RafflesFavoritesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RafflesFavoritesService],
    }).compile();

    service = module.get<RafflesFavoritesService>(RafflesFavoritesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
