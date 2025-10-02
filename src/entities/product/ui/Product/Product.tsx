"use client";
import { HTMLAttributes } from "react";
import { ProductPreview } from "../../model";
import { ProductContext } from "./context";

const Product = ({ product, children, ...rest }: Props) => {
  return (
    <article {...rest}>
      <ProductContext.Provider value={{ product }}>
        {children}
      </ProductContext.Provider>
    </article>
  );
};

interface Props extends HTMLAttributes<HTMLElement> {
  product: ProductPreview;
}

export default Product;
