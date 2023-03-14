import { ServiceProducts } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateServiceProducts } from "../../../interfaces/ICreateServiceProducts";
import { IServiceProductsRepository } from "../../../repositories/IServiceProductsRepository";

export class ServiceProductsRepository implements IServiceProductsRepository {
  async create(data: ICreateServiceProducts): Promise<ServiceProducts> {
    const serviceProducts = prismaClient.serviceProducts.create({
      data: data
    });

    return serviceProducts;
  }

  async findByService(serviceId: string): Promise<ServiceProducts[]> {
    const serviceProduct = await prismaClient.serviceProducts.findMany({
      where: { serviceId },
      include: { product: true }
    });
    return serviceProduct;
  }
}
