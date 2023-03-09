import { v4 as uuidV4 } from "uuid";
import { Client, ServiceProducts, User, Vehicle } from "@prisma/client";

export class Service {
  id?: string;
  client_observation!: string | null;
  responsible_observation!: string | null;
  delivery!: Date;
  price!: number;
  status!: string;
  responsible!: string;
  clientId!: string;
  vehicleId!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
