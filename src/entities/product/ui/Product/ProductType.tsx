"use client";
import { HTMLAttributes } from "react";
import { useProductContext } from "./context";
import clsx from "clsx";
import s from "./styles.module.scss";

const ProductType = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { product } = useProductContext();
  return <p className={clsx(s.type, className)}>{product.type}</p>;
};

export default ProductType;
