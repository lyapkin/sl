"use client";
import { HTMLAttributes } from "react";
import { useProductContext } from "./context";
import { FullPrice, ResultPrice } from "@/src/shared/components/price";
import s from "./styles.module.scss";
import clsx from "clsx";

const ProductPrice = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { product } = useProductContext();
  return (
    <div className={clsx(s.price, className)}>
      <ResultPrice
        price={product.price}
        discount={product.discount}
        className={s.price__result}
      />
      <FullPrice
        price={product.price}
        discount={product.discount}
        className={s.price__full}
      />
    </div>
  );
};

export default ProductPrice;
