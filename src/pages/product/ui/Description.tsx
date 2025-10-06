import clsx from "clsx";
import s from "./styles.module.scss";
import { ProductDetail } from "@/src/entities/product";
import { getTranslations } from "next-intl/server";

const Description = async ({ description, name, code, className }: Props) => {
  const t = await getTranslations("detail");
  return (
    <div className={clsx(s.description, s.block, className)}>
      <h2 className={s.block__title}>{t("description")}:</h2>
      <div className={s.description__content}>
        <p className={s.description__name}>{name}</p>
        <p className={s.description__code}>
          {t("code")}: {code}
        </p>
        <p className={s.description__text}>{description}</p>
      </div>
    </div>
  );
};

interface Props {
  description: ProductDetail["description"];
  name: ProductDetail["name"];
  code: ProductDetail["code"];
  className?: string;
}

export default Description;
