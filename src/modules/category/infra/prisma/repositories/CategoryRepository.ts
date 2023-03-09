import { Category } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateCategory } from "../../../interfaces/ICreateCategory";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  async create(data: ICreateCategory): Promise<Category> {
    const category = await prismaClient.category.create({
      data: data
    });

    return category;
  }
  async findByName(name: string): Promise<Category | null> {
    const category = await prismaClient.category.findFirst({ where: { name } });
    return category;
  }
  async findById(id: string): Promise<Category | null> {
    const category = await prismaClient.category.findUnique({ where: { id } });
    return category;
  }
  async listAll(): Promise<Category[]> {
    const categories = await prismaClient.category.findMany();
    return categories;
  }
}
