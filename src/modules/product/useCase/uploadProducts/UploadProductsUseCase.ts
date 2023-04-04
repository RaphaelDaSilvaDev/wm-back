import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICreateProduct } from "../../interfaces/ICreateProduct";
import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/IProductRepository";
import { ICategoryRepository } from "../../../category/repositories/ICategoryRepository";

@injectable()
export class UploadProductsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  loadProducts(file: Express.Multer.File): Promise<ICreateProduct[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const products: ICreateProduct[] = [];
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [
            barCode,
            name,
            brand,
            quantity,
            minQuantity,
            valueToBuy,
            valueToSell,
            description,
            categoryId
          ] = line;
          products.push({
            barCode: barCode.trim(),
            name: name.trim(),
            brand: brand.trim(),
            quantity: Number(quantity.trim()),
            minQuantity: Number(minQuantity.trim()),
            valueToBuy: Number(valueToBuy.trim()),
            valueToSell: Number(valueToSell.trim()),
            description: description.trim(),
            categoryId: categoryId.trim()
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(products);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File) {
    const products = await this.loadProducts(file);

    products.map(async (product) => {
      const productExists = await this.productRepository.findByName(product.name);
      if (!productExists) {
        const category = await this.categoryRepository.findByName(product.categoryId);

        if (category) {
          product.categoryId = category.id;
          await this.productRepository.create(product);
        }
      }
    });

    return;
  }
}
