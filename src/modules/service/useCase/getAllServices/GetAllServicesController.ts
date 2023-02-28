import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllServicesUseCase } from "./GetAllServicesUseCase";

export class GetAllServicesController {
  async handle(request: Request, response: Response) {
    const { search } = request.query;

    const getAllServicesUseCase = container.resolve(GetAllServicesUseCase);
    const services = await getAllServicesUseCase.execute(search as string);

    return response.json(services);
  }
}
