import { Category } from "@prisma/client";
import { ICreateCategory } from "../interfaces/ICreateCategory";

export interface ICategoryRepository {
  create(data: ICreateCategory): Promise<Category>;
  findByName(name: string): Promise<Category | null>;
  findById(id: string): Promise<Category | null>;
  listAll(): Promise<Category[]>;
}
