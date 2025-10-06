import { getTranslations } from "next-intl/server";

const Stock = async ({ stock, className }: Props) => {
  if (!stock) return null;

  const t = await getTranslations("product");
  return <p className={className}>{t("stock")}</p>;
};

interface Props {
  stock: boolean;
  className?: string;
}

export default Stock;
