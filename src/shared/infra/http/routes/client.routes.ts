import { Router } from "express";
import { CreateClientController } from "../../../../modules/client/useCase/createClient/CreateClientController";
import { ListClientController } from "../../../../modules/client/useCase/listClient/ListClientController";
import { UpdateClientController } from "../../../../modules/client/useCase/updateClient/UpdateClientController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const clientRoute = Router();

const createClientController = new CreateClientController();
const updateClientController = new UpdateClientController();
const listClientController = new ListClientController();

clientRoute.post("/", ensureAuthenticated, createClientController.handle);
clientRoute.patch("/update/:id", ensureAuthenticated, updateClientController.handle);
clientRoute.get("/", ensureAuthenticated, listClientController.handle);

export { clientRoute };
