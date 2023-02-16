import { Service } from "../infra/prisma/entities/Service";
import { ICreateService } from "../interfaces/ICreateService";
import { IEditService } from "../interfaces/IEditService";

export interface IServiceRepository {
  findByCarPlate(plate: string): Promise<Service | null>;
  create(service: ICreateService): Promise<Service>;
  findServiceById(id: string): Promise<Service | null>;
  editService(service: ICreateService): Promise<Service>;
}
