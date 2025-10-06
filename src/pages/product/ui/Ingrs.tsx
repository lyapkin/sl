import { ProductDetail } from "@/src/entities/product";
import s from "./styles.module.scss";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";

const Ingrs = async ({ ingrs, className }: Props) => {
  const t = await getTranslations("detail");
  return (
    <div className={clsx(s.ingrs, s.block, className)}>
      <h2 className={s.block__title}>{t("ingrs")}:</h2>
      <p className={s.ingrs__text}>{ingrs}</p>
    </div>
  );
};

interface Props {
  ingrs: ProductDetail["ingrs"];
  className?: string;
}

export default Ingrs;
