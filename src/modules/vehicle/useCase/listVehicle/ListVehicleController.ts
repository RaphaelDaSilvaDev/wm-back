import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVehicleUseCase } from "./ListVehicleUseCase";

export class ListVehicleController {
  async handle(request: Request, response: Response) {
    const listVehicleUseCase = container.resolve(ListVehicleUseCase);

    const vehicles = await listVehicleUseCase.execute();

    return response.json(vehicles);
  }
}
