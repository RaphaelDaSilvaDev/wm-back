import { Router } from "express";
import { CreateServiceProductsController } from "../../../../modules/serviceProducts/useCase/createServiceProducts/CreateServiceProductsController";
import { ListServiceProductsController } from "../../../../modules/serviceProducts/useCase/listServiceProducts/ListServiceProductsContoller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createServiceProductsController = new CreateServiceProductsController();
const listServiceProductsController = new ListServiceProductsController();

const serviceProducts = Router();

serviceProducts.post("/", ensureAuthenticated, createServiceProductsController.handle);
serviceProducts.get("/:id", ensureAuthenticated, listServiceProductsController.handle);

export { serviceProducts };
