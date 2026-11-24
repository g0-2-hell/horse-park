import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateHorseDto } from './dto/create-horse.dto.js';
import { UpdateHorseDto } from './dto/update-horse.dto.js';

@Injectable()
export class HorsesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.horse.findMany({ include: { horsePhotos: true } });
  }

  create(dto: CreateHorseDto) {
    return this.prisma.horse.create({
      data: {
        ...dto,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
      },
    });
  }

  async findOne(id: number) {
    const horse = await this.prisma.horse.findUnique({
      where: { id },
      include: { horsePhotos: true },
    });
    if (horse === null) {
      throw new NotFoundException(`Horse with ID ${id} not found`);
    }
    return horse;
  }

  async update(id: number, dto: UpdateHorseDto) {
    await this.findOne(id);
    return this.prisma.horse.update({
      where: { id },
      data: {
        ...dto,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.horse.delete({ where: { id } });
  }
}
