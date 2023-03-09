import { Router } from "express";
import { CreateProductController } from "../../../../modules/product/useCase/createProduct/CreateProductContoller";
import { ListProductsController } from "../../../../modules/product/useCase/listProducts/ListProductsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

const productRoute = Router();

productRoute.post("/", ensureAuthenticated, createProductController.handle);
productRoute.get("/", ensureAuthenticated, listProductsController.handle);

export { productRoute };
