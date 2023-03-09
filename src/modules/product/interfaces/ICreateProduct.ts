export interface ICreateProduct {
  barCode?: string;
  name: string;
  brand: string;
  quantity: number;
  minQuantity: number;
  valueToBuy: number;
  valueToSell: number;
  description: string;
  categoryId: string;
}
