import { Vehicle } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateVehicle } from "../../../interfaces/ICreateVehicle";
import { IVehicleRepository } from "../../../repositories/IVehicleRepository";

export class VehicleRepository implements IVehicleRepository {
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
    const vehicle = await prismaClient.vehicle.findUnique({ where: { id } });
    return vehicle;
  }

  async listAll(): Promise<Vehicle[]> {
    const vehicles = await prismaClient.vehicle.findMany({ include: { Client: true } });
    return vehicles;
  }

  async listByClient(client_id: string): Promise<Vehicle[]> {
    const vehicles = await prismaClient.vehicle.findMany({ where: { clientId: client_id } });
    return vehicles;
  }
}
