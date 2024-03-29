import { Router } from "express";
import { CreateProductController } from "../../../../modules/product/useCase/createProduct/CreateProductContoller";
import { EditProductController } from "../../../../modules/product/useCase/editProduct/EditProductController";
import { GetProductByIdController } from "../../../../modules/product/useCase/getProductById/GetProductByIdController";
import { ListProductsController } from "../../../../modules/product/useCase/listProducts/ListProductsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import upload from "../../../../config/upload";
import { UploadProductController } from "../../../../modules/product/useCase/uploadProducts/UploadProductsController";
import { AlterQuantityProductController } from "../../../../modules/product/useCase/alterQuantityProduct/AlterQuantityProductController";

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const getProductByIdController = new GetProductByIdController();
const editProductController = new EditProductController();
const uploadProductsController = new UploadProductController();
const alterQuantityProductController = new AlterQuantityProductController();

const productRoute = Router();

const productUpload = multer(upload);

productRoute.post("/", ensureAuthenticated, createProductController.handle);
productRoute.get("/", ensureAuthenticated, listProductsController.handle);
productRoute.get("/:id", ensureAuthenticated, getProductByIdController.handle);
productRoute.patch("/edit/:id", ensureAuthenticated, editProductController.handle);
productRoute.post(
  "/upload",
  ensureAuthenticated,
  productUpload.single("file"),
  uploadProductsController.handle
);
productRoute.patch("/alter-quantity/:id", ensureAuthenticated, alterQuantityProductController.handle);

export { productRoute };
