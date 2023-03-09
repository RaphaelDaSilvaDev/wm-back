import { Router } from "express";
import { CreateVehicleController } from "../../../../modules/vehicle/useCase/createVehicle/CreateVehicleController";
import { ListVehicleController } from "../../../../modules/vehicle/useCase/listVehicle/ListVehicleController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createVehicleController = new CreateVehicleController();
const listVehivleController = new ListVehicleController();

const vehicleRoute = Router();

vehicleRoute.post("/", ensureAuthenticated, createVehicleController.handle);
vehicleRoute.get("/", ensureAuthenticated, listVehivleController.handle);
vehicleRoute.get("/client/:id", ensureAuthenticated, listVehivleController.handle);

export { vehicleRoute };
