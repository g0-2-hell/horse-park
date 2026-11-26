import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateNewsDto } from './dto/create-news.dto.js';
import { UpdateNewsDto } from './dto/update-news.dto.js';

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.news.findMany({
      include: { newsPhotos: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  create(dto: CreateNewsDto) {
    return this.prisma.news.create({ data: dto });
  }

  async findOne(id: number) {
    const news = await this.prisma.news.findUnique({
      where: { id },
      include: { newsPhotos: true },
    });
    if (news === null) {
      throw new NotFoundException(`News with ID ${id} not found`);
    }
    return news;
  }

  async update(id: number, dto: UpdateNewsDto) {
    await this.findOne(id);
    return this.prisma.news.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.news.delete({ where: { id } });
  }
}
