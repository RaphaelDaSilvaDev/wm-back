import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";

@injectable()
export class ListVehicleByIdUseCase {
  constructor(
    @inject("VehicleRepository")
    private vehicleRepository: IVehicleRepository
  ) {}

  async execute(id: string) {
    const vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      throw new AppError("Veículo não encontrado!");
    }

    return vehicle;
  }
}
