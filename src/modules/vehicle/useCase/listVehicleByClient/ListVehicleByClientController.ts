import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVehicleByClientUseCase } from "./ListVehicleByClientUseCase";

export class ListVehicleByClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listVehicleByClientUseCase = container.resolve(ListVehicleByClientUseCase);

    const vehicles = await listVehicleByClientUseCase.execute(id);

    return response.json(vehicles);
  }
}
