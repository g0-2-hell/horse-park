/*
  Warnings:

  - Added the required column `gender` to the `horses` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "HorseGender" AS ENUM ('STALLION', 'GELDING', 'MARE');

-- AlterTable
ALTER TABLE "horses" ADD COLUMN     "gender" "HorseGender" NOT NULL;
