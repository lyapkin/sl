import { ProductBase } from "./ProductBase";

export type ProductDetail = {
  description: string;
  code: string;
  attrs: Attr[];
  ingrs: string;
  imgs: Img[];
} & ProductBase;

type Attr = {
  name: string;
  value: string;
};

type Img = {
  id: number;
  img: string;
};
