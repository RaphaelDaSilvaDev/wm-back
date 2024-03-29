import { v4 as uuidV4 } from "uuid";

export class Category {
  id!: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
