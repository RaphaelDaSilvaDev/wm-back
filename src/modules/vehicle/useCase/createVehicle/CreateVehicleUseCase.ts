import { inject } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateVehicle } from "../../interfaces/ICreateVehicle";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";

export class CreateVehicleUseCase {
  constructor(
    @inject("VehicleRepository")
    private vehicleRepository: IVehicleRepository
  ) {}

  async execute(data: ICreateVehicle) {
    const findVehicle = await this.vehicleRepository.findByPlate(data.plate);

    if (findVehicle) {
      throw new AppError("Este carro já está cadastrado");
    }

    const vehicle = await this.vehicleRepository.create(data);

    return vehicle;
  }
}
