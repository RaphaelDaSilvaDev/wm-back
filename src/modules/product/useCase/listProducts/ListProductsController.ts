import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductsUseCase } from "./ListProductsUseCase";

export class ListProductsController {
  async handle(request: Request, response: Response) {
    const { search } = request.query;

    const listProductsUseCase = container.resolve(ListProductsUseCase);

    const products = await listProductsUseCase.execute(search as string);
    return response.json(products);
  }
}
