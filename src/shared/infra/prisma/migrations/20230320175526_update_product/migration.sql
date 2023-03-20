/*
  Warnings:

  - Made the column `barCode` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `brand` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `minQuantity` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valueToBuy` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valueToSell` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "barCode" SET NOT NULL,
ALTER COLUMN "brand" SET NOT NULL,
ALTER COLUMN "minQuantity" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL,
ALTER COLUMN "valueToBuy" SET NOT NULL,
ALTER COLUMN "valueToSell" SET NOT NULL;
