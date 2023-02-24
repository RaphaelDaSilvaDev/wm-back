import { Router } from "express";
import { CreateServiceController } from "../../../../modules/service/useCase/createService/CreateServiceController";
import { EditServiceController } from "../../../../modules/service/useCase/editService/EditServiceController";
import { GetAllServicesController } from "../../../../modules/service/useCase/getAllServices/GetAllServicesController";
import { UpdateServiceStatusController } from "../../../../modules/service/useCase/updateServiceStatus/UpdateServiceStatusController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const serviceRoute = Router();

const createServiceController = new CreateServiceController();
const editServiceController = new EditServiceController();
const updateServiceStatusController = new UpdateServiceStatusController();
const getAllServicesController = new GetAllServicesController();

serviceRoute.post("/", ensureAuthenticated, createServiceController.handle);
serviceRoute.patch("/edit/:id", ensureAuthenticated, editServiceController.handle);
serviceRoute.patch("/status/:id", ensureAuthenticated, updateServiceStatusController.handle);
serviceRoute.get("/", ensureAuthenticated, getAllServicesController.handle);

export { serviceRoute };
