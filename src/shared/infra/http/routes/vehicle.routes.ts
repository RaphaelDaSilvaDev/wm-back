import { Router } from "express";
import { CreateVehicleController } from "../../../../modules/vehicle/useCase/createVehicle/CreateVehicleController";
import { ListVehicleController } from "../../../../modules/vehicle/useCase/listVehicle/ListVehicleController";
import { ListVehicleByClientController } from "../../../../modules/vehicle/useCase/listVehicleByClient/ListVehicleByClientController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createVehicleController = new CreateVehicleController();
const listVehivleController = new ListVehicleController();
const listVehicleFindByClientController = new ListVehicleByClientController();

const vehicleRoute = Router();

vehicleRoute.post("/", ensureAuthenticated, createVehicleController.handle);
vehicleRoute.get("/", ensureAuthenticated, listVehivleController.handle);
vehicleRoute.get("/client/:id", ensureAuthenticated, listVehicleFindByClientController.handle);

export { vehicleRoute };
