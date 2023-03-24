export interface IEditService {
  id?: string;
  delivery?: Date;
  responsible_observation?: string | null;
  price?: number;
  discountValue?: number | null;
  discountPercentage?: number | null;
  responsible?: string;
  status?: string;
}
