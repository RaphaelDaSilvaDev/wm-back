/*
  Warnings:

  - You are about to drop the column `observation` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "observation",
ADD COLUMN     "client_observation" TEXT,
ADD COLUMN     "responsible_observation" TEXT;
