import clsx from "clsx";
import { HTMLAttributes } from "react";
import s from "./styles.module.scss";

const ProductCurrency = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <ul className={clsx(s.currency, className)}>
      <li className={clsx(s.currency__item, s.currency__item_active)}>
        <button>$</button>
      </li>
      <li className={s.currency__item}>
        <button>€</button>
      </li>
      <li className={s.currency__item}>
        <button>¥</button>
      </li>
    </ul>
  );
};

export default ProductCurrency;
