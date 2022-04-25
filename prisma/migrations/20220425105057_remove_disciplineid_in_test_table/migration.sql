/*
  Warnings:

  - You are about to drop the column `disciplineId` on the `tests` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_disciplineId_fkey";

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "disciplineId";
