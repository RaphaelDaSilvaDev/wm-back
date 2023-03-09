import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceProductsUseCase } from "./CreateServiceProductsUseCase";

export class CreateServiceProductsController {
  async handle(request: Request, response: Response) {
    const { serviceId, quantity, productId } = request.body;

    const createServiceProductsUseCase = container.resolve(CreateServiceProductsUseCase);

    const serviceProduct = await createServiceProductsUseCase.execute({ productId, quantity, serviceId });

    return response.json(serviceProduct);
  }
}
