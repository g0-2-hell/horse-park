import { HorseGender } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsDateString,
  IsEnum,
} from 'class-validator';

export class CreateHorseDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  breed?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  coatColor: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(HorseGender)
  gender: HorseGender
}
