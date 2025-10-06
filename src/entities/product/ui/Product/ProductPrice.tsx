"use client";
import { HTMLAttributes } from "react";
import { useProductContext } from "./context";
import { Price } from "../Price";
import s from "./styles.module.scss";
import clsx from "clsx";

const ProductPrice = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { product } = useProductContext();
  return (
    <Price
      price={product.price}
      discount={product.discount}
      className={clsx(className, s.price)}
    >
      <div className={s.price__price}>
        <Price.Result className={s.price__result} />
        <Price.Full className={s.price__full} />
      </div>
      <Price.Currency className={s.price__currency} />
    </Price>
  );
};

export default ProductPrice;
