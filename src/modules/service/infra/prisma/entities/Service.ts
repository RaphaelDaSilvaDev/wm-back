import { v4 as uuidV4 } from "uuid";
import { User } from "@prisma/client";

export class Service {
  id?: string;
  client_name!: string;
  client_phone!: string;
  vehicle_plate!: string;
  vehicle_model!: string;
  observation!: string;
  delivery!: Date;
  price!: number;
  status!: string;
  responsible!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
