import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateService } from "../../../interfaces/ICreateService";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { Service } from "../entities/Service";

export class ServiceRepository implements IServiceRepository {
  async findByCarPlate(plate: string): Promise<Service | null> {
    const service = await prismaClient.service.findFirst({ where: { vehicle: { plate } } });
    return service;
  }

  async create({
    clientId,
    delivery,
    observation,
    price,
    responsible,
    status,
    vehicleId
  }: ICreateService): Promise<Service> {
    const service = await prismaClient.service.create({
      data: {
        clientId,
        delivery,
        observation,
        price,
        responsible,
        status,
        vehicleId
      }
    });

    return service;
  }

  async findServiceById(id: string): Promise<Service | null> {
    const service = await prismaClient.service.findUnique({
      where: { id },
      include: { user: true, client: true, serviceProducts: true, vehicle: true }
    });
    return service;
  }

  async editService({
    delivery,
    id,
    observation,
    price,
    responsible,
    status
  }: ICreateService): Promise<Service> {
    const service = await prismaClient.service.update({
      where: { id },
      data: { delivery, observation, price, status, responsible }
    });

    return service;
  }

  async findAllServices(search?: string): Promise<Service[]> {
    const services = await prismaClient.service.findMany({
      include: { user: true, client: true, serviceProducts: true, vehicle: true },
      where: {
        OR: [
          {
            client: {
              OR: [
                {
                  name: { contains: search, mode: "insensitive" }
                },
                {
                  phoneNumber: { contains: search, mode: "insensitive" }
                },
                {
                  cellphoneNumber: { contains: search, mode: "insensitive" }
                }
              ]
            }
          },
          {
            vehicle: {
              OR: [
                {
                  model: { contains: search, mode: "insensitive" }
                },
                {
                  brand: { contains: search, mode: "insensitive" }
                }
              ]
            }
          },
          { user: { name: { contains: search, mode: "insensitive" } } }
        ]
      }
    });
    return services;
  }
}
