import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVehicleByIdUseCase } from "../listVehicleById/ListVehicleByIdUseCase";

export class ListVehicleByClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listVehicleByCIdUseCase = container.resolve(ListVehicleByIdUseCase);

    const vehicles = await listVehicleByCIdUseCase.execute(id);

    return response.json(vehicles);
  }
}
