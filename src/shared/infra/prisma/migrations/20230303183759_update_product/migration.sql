-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_serviceProductsId_fkey";

-- AlterTable
ALTER TABLE "ServiceProducts" ADD COLUMN     "productId" TEXT;

-- AddForeignKey
ALTER TABLE "ServiceProducts" ADD CONSTRAINT "ServiceProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
