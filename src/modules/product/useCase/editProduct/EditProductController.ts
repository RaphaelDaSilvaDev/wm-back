import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditProductUseCase } from "./EditProductUseCase";

export class EditProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { brand, barCode, categoryId, description, minQuantity, name, quantity, valueToBuy, valueToSell } =
      request.body;

    const editProductUseCase = container.resolve(EditProductUseCase);
    const product = await editProductUseCase.execute(
      { barCode, categoryId, description, minQuantity, name, quantity, valueToBuy, valueToSell, brand },
      id
    );

    return response.json(product);
  }
}
