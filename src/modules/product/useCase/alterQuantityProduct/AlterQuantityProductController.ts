import { Request, Response } from "express";
import { container } from "tsyringe";
import { AlterQuantityProductUseCase } from "./AlterQuantityProductUseCase";

export class AlterQuantityProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { quantity } = request.body;

    const alterQuantityProductUseCase = container.resolve(AlterQuantityProductUseCase);
    const product = await alterQuantityProductUseCase.execute({ id, quantity });

    return response.json(product);
  }
}
