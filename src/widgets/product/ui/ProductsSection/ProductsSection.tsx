import { getTranslations } from "next-intl/server";
import s from "./styles.module.scss";
import Products from "./Products";
import { Type } from "./types";
import { Link } from "@/src/shared/ui";
import clsx from "clsx";

const ProductsSection = async ({ type }: Props) => {
  const t = await getTranslations("products");
  return (
    <section className={clsx(s.section, "container", "section")}>
      <h2 className={s.section__title}>{t(type)}</h2>
      <Products type={type} />
      <Link href={"#"} variant="secondary" className={s.section__link}>
        {t("link")}
      </Link>
    </section>
  );
};

interface Props {
  type: Type;
}

export default ProductsSection;
