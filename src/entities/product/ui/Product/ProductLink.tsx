"use client";
import { Link } from "@/src/shared/libs";
import { useProductContext } from "./context";
import { useTranslations } from "next-intl";
import { HTMLAttributes } from "react";

const ProductLink = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { product } = useProductContext();
  const t = useTranslations("product");
  return (
    <Link href={`/product/${product.slug}/`} className={className}>
      {t("link")}
    </Link>
  );
};

export default ProductLink;
