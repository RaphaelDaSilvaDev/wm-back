import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { ICreateService } from "../../../interfaces/ICreateService";
import { IEditService } from "../../../interfaces/IEditService";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { Service } from "../entities/Service";

export class ServiceRepository implements IServiceRepository {
  async findByCarPlate(plate: string): Promise<Service | null> {
    const service = await prismaClient.service.findFirst({ where: { vehicle_plate: plate } });
    return service;
  }

  async create({
    client_name,
    client_phone,
    delivery,
    observation,
    price,
    responsible,
    status,
    vehicle_model,
    vehicle_plate,
    id
  }: ICreateService): Promise<Service> {
    const service = await prismaClient.service.create({
      data: {
        client_name,
        client_phone,
        delivery,
        observation,
        price,
        status,
        vehicle_model,
        vehicle_plate,
        responsible
      }
    });

    return service;
  }

  async findServiceById(id: string): Promise<Service | null> {
    return await prismaClient.service.findUnique({ where: { id } });
  }

  async editService({
    delivery,
    id,
    observation,
    price,
    responsible,
    status
  }: ICreateService): Promise<Service> {
    const service = prismaClient.service.update({
      where: { id },
      data: { delivery, observation, price, responsible, status }
    });

    return service;
  }
}
