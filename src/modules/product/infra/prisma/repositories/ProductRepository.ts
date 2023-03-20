import { Product } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateProduct } from "../../../interfaces/ICreateProduct";
import { IEditProduct } from "../../../interfaces/IEditProduct";
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
    const product = await prismaClient.product.findUnique({ where: { id }, include: { category: true } });
    return product;
  }

  async listAll(search?: string): Promise<Product[]> {
    const products = await prismaClient.product.findMany({
      include: { category: true },
      where: {
        OR: [
          {
            OR: [
              {
                name: { contains: search, mode: "insensitive" }
              },
              {
                description: { contains: search, mode: "insensitive" }
              },
              {
                brand: { contains: search, mode: "insensitive" }
              }
            ]
          },
          {
            category: { name: { contains: search, mode: "insensitive" } }
          }
        ]
      }
    });
    return products;
  }

  async editProduct(
    {
      barCode,
      brand,
      categoryId,
      description,
      minQuantity,
      name,
      quantity,
      valueToBuy,
      valueToSell
    }: IEditProduct,
    id: string
  ): Promise<Product> {
    const product = await prismaClient.product.update({
      where: { id },
      data: { barCode, brand, categoryId, description, minQuantity, name, quantity, valueToBuy, valueToSell }
    });

    return product;
  }
}
