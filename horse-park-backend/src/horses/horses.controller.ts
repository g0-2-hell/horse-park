import { Controller, Get } from '@nestjs/common';
import { HorsesService } from './horses.service.js';

@Controller('horses')
export class HorsesController {
  constructor(private readonly horsesService: HorsesService) {}

  @Get()
  getAll() {
    return this.horsesService.findAll();
  }
}
