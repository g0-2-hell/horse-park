import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { HorsesService } from './horses.service.js';
import { CreateHorseDto } from './dto/create-horse.dto.js';
import { UpdateHorseDto } from './dto/update-horse.dto.js';

@Controller('horses')
export class HorsesController {
  constructor(private readonly horsesService: HorsesService) {}

  @Get()
  getAll() {
    return this.horsesService.findAll();
  }

  @Post()
  createHorse(@Body() dto: CreateHorseDto) {
    return this.horsesService.create(dto);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.horsesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateHorseDto) {
    return this.horsesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.horsesService.remove(id);
  }
  
}
