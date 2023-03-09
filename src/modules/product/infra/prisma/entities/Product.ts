import { ServiceProducts } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";

export class Product {
  id!: string;
  barCode?: string;
  name?: string;
  brand?: string;
  quantity?: number;
  minQuantity?: number;
  valueToBuy?: number;
  valueToSell?: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  categoryId?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
