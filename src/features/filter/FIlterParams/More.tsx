import { ButtonHTMLAttributes } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";
import { useTranslations } from "next-intl";

const More = ({ all, className, ...rest }: Props) => {
  const t = useTranslations("filters");
  return (
    <button className={clsx(s.more, className)} {...rest}>
      <span className={s.more__text}>{all ? t("fold") : t("all")}</span>
    </button>
  );
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  all: boolean;
}

export default More;
