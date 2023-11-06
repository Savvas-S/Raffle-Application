import { Test, TestingModule } from '@nestjs/testing';
import { RafflesDetailsController } from './raffles-details.controller';

describe('RafflesDetailsController', () => {
  let controller: RafflesDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RafflesDetailsController],
    }).compile();

    controller = module.get<RafflesDetailsController>(RafflesDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
