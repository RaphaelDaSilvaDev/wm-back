import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetServiceUseCase } from "./GetServiceUseCase";

export class GetServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getServiceUseCase = container.resolve(GetServiceUseCase);

    const service = await getServiceUseCase.execute(id);

    return response.json(service);
  }
}
