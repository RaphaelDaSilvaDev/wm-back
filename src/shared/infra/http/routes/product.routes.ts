import { Router } from "express";
import { CreateProductController } from "../../../../modules/product/useCase/createProduct/CreateProductContoller";
import { EditProductController } from "../../../../modules/product/useCase/editProduct/EditProductController";
import { GetProductByIdController } from "../../../../modules/product/useCase/getProductById/GetProductByIdController";
import { ListProductsController } from "../../../../modules/product/useCase/listProducts/ListProductsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const getProductByIdController = new GetProductByIdController();
const editProductController = new EditProductController();

const productRoute = Router();

productRoute.post("/", ensureAuthenticated, createProductController.handle);
productRoute.get("/", ensureAuthenticated, listProductsController.handle);
productRoute.get("/:id", ensureAuthenticated, getProductByIdController.handle);
productRoute.patch("/edit/:id", ensureAuthenticated, editProductController.handle);

export { productRoute };
