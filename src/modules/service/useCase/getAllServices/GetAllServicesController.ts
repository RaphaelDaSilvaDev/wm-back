import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllServicesUseCase } from "./GetAllServicesUseCase";

export class GetAllServicesController {
  async handle(request: Request, response: Response) {
    const getAllServicesUseCase = container.resolve(GetAllServicesUseCase);
    const services = await getAllServicesUseCase.execute();

    return response.json(services);
  }
}
