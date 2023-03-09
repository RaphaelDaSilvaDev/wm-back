import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IClientRepository } from "../../../client/repositories/IClientRepository";
import { IVehicleRepository } from "../../repositories/IVehicleRepository";

@injectable()
export class ListVehicleByClientUseCase {
  constructor(
    @inject("VehicleRepository")
    private vehicleRepository: IVehicleRepository,
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(client_id: string) {
    const client = this.clientRepository.findById(client_id);

    if (!client) {
      throw new AppError("Cliente não encontrado");
    }

    const vehicles = this.vehicleRepository.listByClient(client_id);

    return vehicles;
  }
}
