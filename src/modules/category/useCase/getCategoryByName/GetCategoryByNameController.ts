import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCategoryByNameUseCase } from "./GetCategoryByNameUseCase";

export class GetCategoryByNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const getCategoryByNameUseCase = container.resolve(GetCategoryByNameUseCase);
    const category = await getCategoryByNameUseCase.execute(name);

    return response.json(category);
  }
}
