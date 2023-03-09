import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { barCode, name, brand, quantity, minQuantity, valueToBuy, valueToSell, description, categoryId } =
      request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = await createProductUseCase.execute({
      description,
      name,
      brand,
      categoryId,
      minQuantity,
      quantity,
      valueToBuy,
      valueToSell,
      barCode
    });

    return response.json(product);
  }
}
