import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadCategoriesUseCase } from "./UploadCategoriesUseCase";
import { AppError } from "../../../../shared/errors/AppError";

export class UploadCategoriesController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    if (!file) {
      throw new AppError("File not found!");
    }

    const uploadCategoriesUseCase = container.resolve(UploadCategoriesUseCase);
    await uploadCategoriesUseCase.execute(file);
    return response.send();
  }
}
