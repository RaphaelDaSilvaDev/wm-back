import { ServiceProducts } from "@prisma/client";
import { ICreateServiceProducts } from "../interfaces/ICreateServiceProducts";

export interface IServiceProductsRepository {
  create(data: ICreateServiceProducts): Promise<ServiceProducts>;
  remove(id: string): Promise<void>;
  findByService(serviceId: string): Promise<ServiceProducts[]>;
}
