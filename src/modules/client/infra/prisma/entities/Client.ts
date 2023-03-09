import { Service, Vehicle } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";

export class Client {
  id?: string;
  name!: string;
  document!: string;
  bornAt!: Date;
  phoneNumber!: string;
  cellphoneNumber!: string;
  email!: string;
  cep!: string;
  addressState!: string;
  addressCity!: string;
  addressDistrict!: string;
  addressStreet!: string;
  addressNumber!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
