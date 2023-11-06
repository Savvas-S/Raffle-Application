import { Test, TestingModule } from '@nestjs/testing';
import { RafflesDetailsService } from './raffles-details.service';

describe('RafflesDetailsService', () => {
  let service: RafflesDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RafflesDetailsService],
    }).compile();

    service = module.get<RafflesDetailsService>(RafflesDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
