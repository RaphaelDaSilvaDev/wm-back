import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/category/useCase/createCategory/CreateCategoryController";
import { EditCategoryController } from "../../../../modules/category/useCase/editCategory/EditCategoryController";
import { GetCategoryByNameController } from "../../../../modules/category/useCase/getCategoryByName/GetCategoryByNameController";
import { ListCategoryController } from "../../../../modules/category/useCase/listCategory/ListCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const getCategoryByNameController = new GetCategoryByNameController();
const editCategoryController = new EditCategoryController();

const categoryRoute = Router();

categoryRoute.post("/", ensureAuthenticated, createCategoryController.handle);
categoryRoute.get("/", ensureAuthenticated, listCategoryController.handle);
categoryRoute.get("/:id", ensureAuthenticated, getCategoryByNameController.handle);
categoryRoute.patch("/:id", ensureAuthenticated, editCategoryController.handle);

export { categoryRoute };
