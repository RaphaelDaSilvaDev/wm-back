import { Vehicle } from "@prisma/client";
import { ICreateVehicle } from "../interfaces/ICreateVehicle";

export interface IVehicleRepository {
  create(data: ICreateVehicle): Promise<Vehicle>;
  findByPlate(plate: string): Promise<Vehicle | null>;
  findById(id: string): Promise<Vehicle | null>;
  listAll(search?: string): Promise<Vehicle[]>;
  listByClient(client_id: string): Promise<Vehicle[]>;
}
