export type ProductBase = {
  id: number;
  type: string;
  slug: string;
  name: string;
  stock: boolean;
  price: number;
  discount?: number;
};
