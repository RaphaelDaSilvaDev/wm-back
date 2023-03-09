import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListServiceProductsUseCase } from "./ListServiceProductsUseCase";

export class ListServiceProductsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listServiceProductsUseCase = container.resolve(ListServiceProductsUseCase);

    const serviceProduct = await listServiceProductsUseCase.execute(id);

    return response.json(serviceProduct);
  }
}
