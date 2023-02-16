export interface ICreateService {
  id?: string;
  client_name: string;
  client_phone: string;
  vehicle_plate: string;
  vehicle_model: string;
  observation: string;
  delivery: Date;
  price: number;
  status: string;
  responsible: string;
}
