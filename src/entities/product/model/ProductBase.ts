export type ProductBase = {
  id: number;
  type: string;
  favorite: boolean;
  slug: string;
  name: string;
  stock: boolean;
  price: number;
  discount?: number;
};
