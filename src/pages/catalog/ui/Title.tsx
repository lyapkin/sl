import { getPageApi } from "@/src/shared/api";
import clsx from "clsx";
import { Category } from "@/src/entities/category";
import { HTMLAttributes } from "react";

const Title = async ({ category, className }: Props) => {
  if (category) {
    return (
      <h1 className={clsx(className, "page-title")}>
        <div className="container">{category.name}</div>
      </h1>
    );
  }

  const page = await getPageApi("catalog");

  return (
    <h1 className={clsx(className, "page-title")}>
      <div className="container">{page.title}</div>
    </h1>
  );
};

interface Props extends HTMLAttributes<HTMLElement> {
  category?: Category;
}

export default Title;
