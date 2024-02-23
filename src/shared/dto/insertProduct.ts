export interface InsertProduct {
  name: string;
  price: number;
  image: string;
  categoryId?: number;
  weight: number;
  height: number;
  diameter: number;
  width: number;
  length: number;
  active?: number;
}
