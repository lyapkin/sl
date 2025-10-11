"use client";
import { Nav } from "@/src/shared/ui";
import s from "../styles.module.scss";
import { useState } from "react";
import clsx from "clsx";
import { Category } from "@/src/entities/category";
import CatalogList from "./CatalogList";

const Catalog = ({ href, title, categories }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <Nav.Item
      className={s.nav__item}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Nav.Link
        href={href}
        className={s.nav__link}
        onClick={() => setHover(false)}
      >
        {title}
      </Nav.Link>
      <div
        className={clsx(s.catalog__wrapper, {
          [s.catalog__wrapper_open]: hover,
        })}
      >
        <div className={s.catalog__scroll}>
          <div className="container">
            <div className={s.catalog__root}>
              <CatalogList categories={categories} display={hover} />
            </div>
          </div>
        </div>
      </div>
    </Nav.Item>
  );
};

interface Props {
  href: string;
  title: string;
  categories: Category[];
}

export default Catalog;
