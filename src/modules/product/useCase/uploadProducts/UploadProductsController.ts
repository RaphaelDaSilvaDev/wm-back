import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadProductsUseCase } from "./UploadProductsUseCase";
import { AppError } from "../../../../shared/errors/AppError";

export class UploadProductController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    if (!file) {
      throw new AppError("File not found!");
    }

    const uploadProductsUseCase = container.resolve(UploadProductsUseCase);

    await uploadProductsUseCase.execute(file);

    return response.send();
  }
}
