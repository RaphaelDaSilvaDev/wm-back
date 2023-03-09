import { Product } from "@prisma/client";
import { ICreateProduct } from "../interfaces/ICreateProduct";

export interface IProductRepository {
  create(data: ICreateProduct): Promise<Product>;
  findByName(name: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  listAll(): Promise<Product[]>;
}
