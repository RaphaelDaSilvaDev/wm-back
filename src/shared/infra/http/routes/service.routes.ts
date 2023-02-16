import { Router } from "express";
import { CreateServiceController } from "../../../../modules/service/useCase/createService/CreateServiceController";
import { EditServiceController } from "../../../../modules/service/useCase/editService/EditServiceController";
import { UpdateServiceStatusController } from "../../../../modules/service/useCase/updateServiceStatus/UpdateServiceStatusController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const serviceRoute = Router();

const createServiceController = new CreateServiceController();
const editServiceController = new EditServiceController();
const updateServiceStatusController = new UpdateServiceStatusController();

serviceRoute.post("/", ensureAuthenticated, createServiceController.handle);
serviceRoute.patch("/edit/:id", ensureAuthenticated, editServiceController.handle);
serviceRoute.patch("/status/:id", ensureAuthenticated, updateServiceStatusController.handle);

export { serviceRoute };
