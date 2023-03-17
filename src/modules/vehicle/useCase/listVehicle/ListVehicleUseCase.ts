import { inject, injectable } from "tsyringe";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";

@injectable()
export class ListVehicleUseCase {
  constructor(
    @inject("VehicleRepository")
    private vehicleRepository: IVehicleRepository
  ) {}

  async execute(search?: string) {
    const vehicles = await this.vehicleRepository.listAll(search);

    return vehicles;
  }
}
