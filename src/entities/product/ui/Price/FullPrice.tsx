"use client";
import clsx from "clsx";
import { usePriceContext } from "./provider";
import s from "./styles.module.scss";

const FullPrice = ({ className }: Props) => {
  const { price, discount } = usePriceContext();
  return discount ? (
    <span className={clsx(s.price__full, className)}>{`${price} ₽`}</span>
  ) : null;
};

interface Props {
  className?: string;
}

export default FullPrice;
