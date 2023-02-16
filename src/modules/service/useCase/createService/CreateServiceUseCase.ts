import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateService } from "../../interfaces/ICreateService";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
export class CreateServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) {}

  async execute({
    client_name,
    client_phone,
    delivery,
    observation,
    price,
    responsible,
    status,
    vehicle_model,
    vehicle_plate
  }: ICreateService) {
    const findCarPlate = await this.serviceRepository.findByCarPlate(vehicle_plate);

    if (findCarPlate) {
      throw new AppError("This vehicle already has a service!");
    }

    const service = await this.serviceRepository.create({
      client_name,
      client_phone,
      delivery,
      observation,
      price,
      responsible,
      status: "pendente",
      vehicle_model,
      vehicle_plate
    });

    return service;
  }
}
