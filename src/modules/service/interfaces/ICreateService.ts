import { ServiceProducts } from "@prisma/client";

export interface ICreateService {
  id?: string;
  client_observation: string;
  responsible_observation: string;
  delivery: Date;
  price?: number;
  discountValue?: number;
  discountPercentage?: number;
  status: string;
  responsible: string;
  clientId?: string;
  vehicleId: string;
}
