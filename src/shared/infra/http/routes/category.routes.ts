import { Router } from "express";
import { CreateCategoryController } from "../../../../modules/category/useCase/createCategory/CreateCategoryController";
import { EditCategoryController } from "../../../../modules/category/useCase/editCategory/EditCategoryController";
import { GetCategoryByNameController } from "../../../../modules/category/useCase/getCategoryByName/GetCategoryByNameController";
import { ListCategoryController } from "../../../../modules/category/useCase/listCategory/ListCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import upload from "../../../../config/upload";
import { UploadCategoriesController } from "../../../../modules/category/useCase/uploadCategories/UploadCategoriesController";

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const getCategoryByNameController = new GetCategoryByNameController();
const editCategoryController = new EditCategoryController();
const uploadCategoriesController = new UploadCategoriesController();

const categoryRoute = Router();

const uploadCateogires = multer(upload);

categoryRoute.post("/", ensureAuthenticated, createCategoryController.handle);
categoryRoute.get("/", ensureAuthenticated, listCategoryController.handle);
categoryRoute.get("/:id", ensureAuthenticated, getCategoryByNameController.handle);
categoryRoute.patch("/:id", ensureAuthenticated, editCategoryController.handle);
categoryRoute.post(
  "/upload",
  ensureAuthenticated,
  uploadCateogires.single("file"),
  uploadCategoriesController.handle
);

export { categoryRoute };
