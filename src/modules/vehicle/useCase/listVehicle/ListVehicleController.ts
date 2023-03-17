import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVehicleUseCase } from "./ListVehicleUseCase";

export class ListVehicleController {
  async handle(request: Request, response: Response) {
    const { search } = request.query;
    const listVehicleUseCase = container.resolve(ListVehicleUseCase);

    const vehicles = await listVehicleUseCase.execute(search as string);

    return response.json(vehicles);
  }
}
