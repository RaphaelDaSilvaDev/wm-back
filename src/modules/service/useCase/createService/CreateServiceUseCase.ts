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
    price,
    responsible: userResponsible,
    status,
    clientId,
    vehicleId
  }: ICreateService) {
    const findCarById = await this.serviceRepository.findByCarId(vehicleId);

    if (findCarById?.status !== "delivered") {
      throw new AppError("Este carro já tem um serviço em andamento!");
    }

    const service = await this.serviceRepository.create({
      client_observation,
      responsible_observation,
      delivery,
      price,
      responsible: userResponsible,
      status: "pendente",
      clientId,
      vehicleId
    });

    return service;
  }
}
