import { v4 as uuidV4 } from "uuid";
import { Client, ServiceProducts, User, Vehicle } from "@prisma/client";

export class Service {
  id?: string;
  client?: string;
  vehicle?: string;
  observation!: string;
  delivery!: Date;
  price!: number;
  status!: string;
  user?: string;
  responsible!: string;
  createdAt!: Date;
  updatedAt!: Date;
  clientId?: string;
  vehicleId?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
