import { Client, Service } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";

export class Vehicle {
  id!: string;
  model?: string;
  plate?: string;
  brand?: string;
  launchYear?: Date;
  modelYear?: Date;
  fuel?: string;
  color?: string;
  Client?: Client;
  clientId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
