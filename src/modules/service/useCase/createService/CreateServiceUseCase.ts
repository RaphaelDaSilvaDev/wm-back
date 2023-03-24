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
    client_observation,
    responsible_observation,
    delivery,
    discountValue,
    discountPercentage,
    responsible: userResponsible,
    status,
    vehicleId
  }: ICreateService) {
    const findCarById = await this.serviceRepository.findByCarId(vehicleId);

    if (findCarById) {
      if (findCarById.status !== "delivered") {
        throw new AppError("This vehicle already has a service!");
      }
    }

    const service = await this.serviceRepository.create({
      client_observation,
      responsible_observation,
      delivery,
      discountValue,
      discountPercentage,
      responsible: userResponsible,
      status: status ? status : "pending",
      vehicleId
    });

    return service;
  }
}
