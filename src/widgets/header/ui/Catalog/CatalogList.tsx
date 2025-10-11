"use client";
import { Category } from "@/src/entities/category";
import { Nav } from "@/src/shared/ui";
import s from "../styles.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

const CatalogList = ({ categories, display }: Props) => {
  const [hover, setHover] = useState<Category["id"] | null>(null);

  useEffect(() => {
    setHover(null);
  }, [display]);

  const content = categories.map((item) => {
    return (
      <Nav.Item
        key={item.id}
        className={clsx(s.catalog__item, {
          [s.catalog__item_hover]: hover === item.id,
        })}
        onMouseEnter={() => setHover(item.id)}
      >
        <Nav.Link href={`/catalog/${item.slug}/`} className={s.catalog__link}>
          {item.name}
          {item.children && item.children.length > 0 && (
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.767599 7.81586C0.537923 7.577 0.54537 7.19718 0.784233 6.9675L3.93443 4L0.784233 1.0325C0.54537 0.802823 0.537922 0.422997 0.767598 0.184134C0.997274 -0.0547288 1.3771 -0.0621767 1.61596 0.167499L5.21596 3.5675C5.33361 3.68062 5.4001 3.83679 5.4001 4C5.4001 4.16321 5.33361 4.31938 5.21596 4.4325L1.61596 7.8325C1.3771 8.06218 0.997275 8.05473 0.767599 7.81586Z"
              />
            </svg>
          )}
        </Nav.Link>
        <CatalogList categories={item.children} display={hover === item.id} />
      </Nav.Item>
    );
  });

  return (
    <Nav.List
      className={clsx(s.catalog__list, { [s.catalog__list_display]: display })}
    >
      {content}
    </Nav.List>
  );
};

interface Props {
  categories: Category[];
  display: boolean;
}

export default CatalogList;
