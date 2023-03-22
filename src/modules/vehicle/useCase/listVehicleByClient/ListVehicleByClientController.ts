import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVehicleByClientUseCase } from "./ListVehicleByClientUseCase";

export class ListVehicleByClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listVehicleByCIdUseCase = container.resolve(ListVehicleByClientUseCase);

    const vehicles = await listVehicleByCIdUseCase.execute(id);

    return response.json(vehicles);
  }
}
