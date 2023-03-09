import { Product } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateProduct } from "../../../interfaces/ICreateProduct";
import { IProductRepository } from "../../../repositories/IProductRepository";

export class ProductRepository implements IProductRepository {
  async create(data: ICreateProduct): Promise<Product> {
    const product = await prismaClient.product.create({
      data: data
    });

    return product;
  }

  async findByName(name: string): Promise<Product | null> {
    const product = await prismaClient.product.findFirst({ where: { name } });
    return product;
  }

  async findById(id: string): Promise<Product | null> {
    const product = await prismaClient.product.findUnique({ where: { id } });
    return product;
  }

  async listAll(): Promise<Product[]> {
    const products = await prismaClient.product.findMany({ include: { category: true } });
    return products;
  }
}
