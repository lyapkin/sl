"use client";
import clsx from "clsx";
import { usePriceContext } from "./provider";
import s from "./styles.module.scss";

const ResultPrice = ({ className }: Props) => {
  const { resultPrice } = usePriceContext();
  return (
    <span
      className={clsx(s.price__result, className)}
    >{`${resultPrice} ₽`}</span>
  );
};

interface Props {
  className?: string;
}

export default ResultPrice;
