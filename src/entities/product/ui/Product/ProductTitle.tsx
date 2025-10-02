"use client";
import { HTMLAttributes } from "react";
import { useProductContext } from "./context";
import { Link } from "@/src/shared/libs";
import clsx from "clsx";
import s from "./styles.module.scss";

const ProductTitle = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { product } = useProductContext();
  return (
    <h2 className={clsx(s.title, className)}>
      <Link href={`/product/${product.slug}/`}>{product.name}</Link>
    </h2>
  );
};

export default ProductTitle;
