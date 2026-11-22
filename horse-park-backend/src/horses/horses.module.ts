import { Module } from '@nestjs/common';
import { HorsesController } from './horses.controller.js';
import { HorsesService } from './horses.service.js';

@Module({
  controllers: [HorsesController],
  providers: [HorsesService]
})
export class HorsesModule {}
