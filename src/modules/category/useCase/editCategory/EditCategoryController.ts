import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditCategoryUseCase } from "./EditCategoryUseCase";

export class EditCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const editCategoryUseCase = container.resolve(EditCategoryUseCase);

    const category = await editCategoryUseCase.execute(name, id);

    return response.json(category);
  }
}
