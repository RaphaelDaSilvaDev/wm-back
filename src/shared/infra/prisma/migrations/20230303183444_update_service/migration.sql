/*
  Warnings:

  - You are about to drop the column `client_name` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `client_phone` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `vehicle_model` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `vehicle_plate` on the `Service` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "client_name",
DROP COLUMN "client_phone",
DROP COLUMN "vehicle_model",
DROP COLUMN "vehicle_plate",
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "vehicleId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
