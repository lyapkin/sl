"use client";
import clsx from "clsx";
import { currencies, usePriceContext } from "./provider";
import s from "./styles.module.scss";

const Currency = ({ className }: Props) => {
  const { currency, setCurrency } = usePriceContext();
  return (
    <ul className={clsx(s.currency, className)}>
      {currencies.map((item) => {
        return (
          <li
            key={item[0]}
            className={clsx(s.currency__item, {
              [s.currency__item_active]: currency === item[0],
            })}
          >
            <button onClick={() => setCurrency(item[0])}>{item[1]}</button>
          </li>
        );
      })}
    </ul>
  );
};

interface Props {
  className?: string;
}

export default Currency;
