import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
  async handle(request: Request, response: Response) {
    const { search } = request.query;
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);
    const categories = await listCategoryUseCase.execute(search as string);
    return response.json(categories);
  }
}
