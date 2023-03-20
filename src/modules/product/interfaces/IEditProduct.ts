export interface IEditProduct {
  barCode?: string | null;
  name?: string;
  brand?: string;
  quantity?: number;
  minQuantity?: number;
  valueToBuy?: number;
  valueToSell?: number;
  description?: string;
  categoryId?: string | null;
}
