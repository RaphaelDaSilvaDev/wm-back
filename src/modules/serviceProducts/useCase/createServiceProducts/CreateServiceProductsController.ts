import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceProductsUseCase } from "./CreateServiceProductsUseCase";

export class CreateServiceProductsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { products } = request.body;

    const createServiceProductsUseCase = container.resolve(CreateServiceProductsUseCase);

    const serviceProduct = await createServiceProductsUseCase.execute(products, id);

    return response.json(serviceProduct);
  }
}
