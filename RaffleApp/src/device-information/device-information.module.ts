import { Module } from '@nestjs/common';
import { DeviceInformationController } from './device-information.controller';
import { DeviceInformationService } from './device-information.service';

@Module({
  controllers: [DeviceInformationController],
  providers: [DeviceInformationService]
})
export class DeviceInformationModule {}
