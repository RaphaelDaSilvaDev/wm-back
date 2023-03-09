import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateService } from "../../../interfaces/ICreateService";
import { IServiceRepository } from "../../../repositories/IServiceRepository";
import { Service } from "../entities/Service";

export class ServiceRepository implements IServiceRepository {
  async findByCarId(id: string): Promise<Service | null> {
    const service = await prismaClient.service.findFirst({ where: { vehicle: { id } } });
    return service;
  }

  async create({
    client_observation,
    responsible_observation,
    delivery,
    price,
    status,
    responsible,
    clientId,
    vehicleId
  }: ICreateService): Promise<Service> {
    const service = await prismaClient.service.create({
      data: {
        client_observation,
        responsible_observation,
        delivery,
        price,
        status,
        responsible,
        clientId,
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

  async editService({ delivery, id, price, responsible, status }: ICreateService): Promise<Service> {
    const service = await prismaClient.service.update({
      where: { id },
      data: { delivery, price, status, responsible }
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
