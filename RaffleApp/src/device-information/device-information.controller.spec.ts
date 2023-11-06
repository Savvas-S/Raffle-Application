import { Test, TestingModule } from '@nestjs/testing';
import { DeviceInformationController } from './device-information.controller';

describe('DeviceInformationController', () => {
  let controller: DeviceInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceInformationController],
    }).compile();

    controller = module.get<DeviceInformationController>(DeviceInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
