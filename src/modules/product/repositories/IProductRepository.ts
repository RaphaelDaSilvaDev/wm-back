import { Product } from "@prisma/client";
import { ICreateProduct } from "../interfaces/ICreateProduct";
import { IEditProduct } from "../interfaces/IEditProduct";

export interface IProductRepository {
  create(data: ICreateProduct): Promise<Product>;
  editProduct(data: IEditProduct, id: string): Promise<Product>;
  findByName(name: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  listAll(search?: string): Promise<Product[]>;
}
