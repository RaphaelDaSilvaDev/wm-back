import { inject, injectable } from "tsyringe";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";

@injectable()
export class ListVehicleUseCase {
  constructor(
    @inject("VehicleRepository")
    private vehicleRepository: IVehicleRepository
  ) {}

  async execute() {
    const vehicles = await this.vehicleRepository.listAll();

    return vehicles;
  }
}
