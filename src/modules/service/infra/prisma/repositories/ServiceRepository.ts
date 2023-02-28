import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { ICreateService } from "../../../interfaces/ICreateService";
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
    vehicle_model,
    vehicle_plate
  }: ICreateService): Promise<Service> {
    const service = await prismaClient.service.create({
      data: {
        client_name,
        client_phone,
        delivery,
        observation,
        price,
        status: "pending",
        vehicle_model,
        vehicle_plate,
        responsible
      }
    });

    return service;
  }

  async findServiceById(id: string): Promise<Service | null> {
    return await prismaClient.service.findUnique({ where: { id }, include: { user: true } });
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
      data: { delivery, observation, price, status, responsible }
    });

    return service;
  }

  async findAllServices(search?: string): Promise<Service[]> {
    const services = prismaClient.service.findMany({
      include: { user: true },
      where: {
        OR: [
          { client_name: { contains: search, mode: "insensitive" } },
          { client_phone: { contains: search, mode: "insensitive" } },
          { vehicle_model: { contains: search, mode: "insensitive" } },
          { vehicle_plate: { contains: search, mode: "insensitive" } },
          { user: { name: { contains: search, mode: "insensitive" } } }
        ]
      }
    });
    return services;
  }
}
