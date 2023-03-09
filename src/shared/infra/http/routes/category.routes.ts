import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/category/useCase/createCategory/CreateCategoryController";
import { ListCategoryController } from "../../../../modules/category/useCase/listCategory/ListCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();

const categoryRoute = Router();

categoryRoute.post("/", ensureAuthenticated, createCategoryController.handle);
categoryRoute.get("/", ensureAuthenticated, listCategoryController.handle);

export { categoryRoute };
