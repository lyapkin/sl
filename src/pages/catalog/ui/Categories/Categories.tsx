"use client";
import clsx from "clsx";
import s from "./styles.module.scss";
import { ArrowButton, Scrollable } from "@/src/shared/ui";
import { Category } from "@/src/entities/category";
import CategoryItem from "./CategoryItem";

const Categories = ({ className, categories }: Props) => {
  return (
    <div className={clsx(s.categories, className)}>
      <Scrollable>
        <Scrollable.Content
          className={s.categories__list}
          data={categories.map((item) => (
            <CategoryItem key={item.id} category={item} />
          ))}
        />
        <div className={s.categories__btns}>
          <Scrollable.Control direction="back">
            <ArrowButton direction="left" />
          </Scrollable.Control>
          <Scrollable.Control direction="forward">
            <ArrowButton direction="right" />
          </Scrollable.Control>
        </div>
      </Scrollable>
    </div>
  );
};

interface Props {
  categories: Category["children"];
  className?: string;
}

export default Categories;
