import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetClientByIdUseCase } from "./GetClientByIdUseCase";

export class GetClientByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getClientByIdUseCase = container.resolve(GetClientByIdUseCase);

    const client = await getClientByIdUseCase.execute(id);

    return response.json(client);
  }
}
