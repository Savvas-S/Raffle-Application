import { Test, TestingModule } from '@nestjs/testing';
import { DeviceInformationService } from './device-information.service';

describe('DeviceInformationService', () => {
  let service: DeviceInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceInformationService],
    }).compile();

    service = module.get<DeviceInformationService>(DeviceInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
