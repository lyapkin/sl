"use client";
import { createContext, useContext } from "react";
import { ProductPreview } from "../../../model";

type Context = {
  product: ProductPreview;
};

const ProductContext = createContext<Context | undefined>(undefined);

export default ProductContext;

export const useProductContext = () => {
  const product = useContext(ProductContext);

  if (!product) {
    throw new Error("useProductContext должен быть использован в Product");
  }

  return product;
};
