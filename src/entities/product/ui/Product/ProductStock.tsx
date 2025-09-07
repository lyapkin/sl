import { HTMLAttributes } from "react";
import { useProductContext } from "./context";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import s from "./styles.module.scss";

const ProductStock = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { product } = useProductContext();
  const t = useTranslations("product");
  return (
    <p className={clsx(className, { [s.stock_in]: product.stock })}>
      {product.stock ? t("stock") : t("order")}
    </p>
  );
};

export default ProductStock;
