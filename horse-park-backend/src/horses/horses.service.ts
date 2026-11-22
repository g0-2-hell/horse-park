import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class HorsesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.horse.findMany({ include: { horsePhotos: true } });
  }
}
