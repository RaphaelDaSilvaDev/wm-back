import { ServiceProducts } from "@prisma/client";

export interface ICreateService {
  id?: string;
  observation: string;
  delivery: Date;
  price: number;
  status: string;
  responsible: string;
  vehicleId: string;
  clientId: string;
}
