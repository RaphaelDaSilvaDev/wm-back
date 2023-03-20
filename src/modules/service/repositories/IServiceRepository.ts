import { Service } from "../infra/prisma/entities/Service";
import { ICreateService } from "../interfaces/ICreateService";
import { IEditService } from "../interfaces/IEditService";

export interface IServiceRepository {
  findByCarId(id: string): Promise<Service | null>;
  create(service: ICreateService): Promise<Service>;
  findServiceById(id: string): Promise<Service | null>;
  editService(service: IEditService): Promise<Service>;
  findAllServices(search?: string): Promise<Service[]>;
}
