"use client";
import Image from "next/image";
import { useProductContext } from "./context";
import { HTMLAttributes } from "react";
import clsx from "clsx";
import s from "./styles.module.scss";
import { Link } from "@/src/shared/libs";

const ProductImg = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { product } = useProductContext();
  return (
    <Link className={clsx(s.img, className)} href={`/product/${product.slug}/`}>
      <Image
        src={product.img}
        fill
        alt={`${product.type} ${product.name}`}
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
};

export default ProductImg;
