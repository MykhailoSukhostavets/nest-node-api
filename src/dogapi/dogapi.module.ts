import { Module } from '@nestjs/common';
import { DogapiService } from './dogapi.service';
import { DogapiController } from './dogapi.controller';

@Module({
  providers: [DogapiService],
  controllers: [DogapiController],
})
export class DogapiModule {}
