import clsx from "clsx";
import s from "./styles.module.scss";
import { ProductDetail } from "@/src/entities/product";
import { getTranslations } from "next-intl/server";

const Attrs = async ({ attrs, className }: Props) => {
  const t = await getTranslations("detail");
  return (
    <div className={clsx(s.attrs, s.block, className)}>
      <h2 className={s.block__title}>{t("attrs")}:</h2>
      <ul className={s.attrs__list}>
        {attrs.map((item, i) => {
          return (
            <li key={i} className={s.attrs__item}>
              <span className={s.attrs__name}>{item.name}:</span>
              <span className={s.attrs__value}>{item.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface Props {
  attrs: ProductDetail["attrs"];
  className?: string;
}

export default Attrs;
