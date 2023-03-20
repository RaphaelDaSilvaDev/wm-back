import { Vehicle } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateVehicle } from "../../../interfaces/ICreateVehicle";
import { IVehicleRepository } from "../../../repositories/IVehicleRepository";

export class vehicleRepository implements IVehicleRepository {
  async create(data: ICreateVehicle): Promise<Vehicle> {
    const vehicle = await prismaClient.vehicle.create({
      data: data
    });

    return vehicle;
  }

  async findByPlate(plate: string): Promise<Vehicle | null> {
    const vehicle = await prismaClient.vehicle.findFirst({ where: { plate } });
    return vehicle;
  }

  async findById(id: string): Promise<Vehicle | null> {
    const vehicle = await prismaClient.vehicle.findUnique({ where: { id }, include: { Client: true } });
    return vehicle;
  }

  async listAll(search?: string): Promise<Vehicle[]> {
    const vehicles = await prismaClient.vehicle.findMany({
      include: { Client: true },
      where: {
        OR: [
          {
            OR: [
              {
                brand: { contains: search ? search : "", mode: "insensitive" }
              },
              {
                plate: { contains: search ? search : "", mode: "insensitive" }
              },
              {
                model: { contains: search ? search : "", mode: "insensitive" }
              }
            ]
          },
          {
            Client: { name: { contains: search ? search : "", mode: "insensitive" } }
          }
        ]
      }
    });
    return vehicles;
  }

  async listByClient(client_id: string): Promise<Vehicle[]> {
    const vehicles = await prismaClient.vehicle.findMany({ where: { clientId: client_id } });
    return vehicles;
  }

  async updatedVehicle(client_id: string, id: string): Promise<Vehicle> {
    const vehicle = await prismaClient.vehicle.update({
      where: { id },
      data: { clientId: client_id }
    });

    return vehicle;
  }
}
