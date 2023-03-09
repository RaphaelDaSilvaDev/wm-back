import { v4 as uuidV4 } from "uuid";

export class ServiceProducts {
  id?: string;
  serviceId?: string;
  quantity?: number;
  createdAt?: Date;
  updatedAt?: Date;
  productId?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
