import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListClientUseCase } from "./ListClientUseCase";

export class ListClientController {
  async handle(request: Request, response: Response) {
    const listClientUseCase = container.resolve(ListClientUseCase);
    const clients = await listClientUseCase.execute();
    return response.json(clients);
  }
}
