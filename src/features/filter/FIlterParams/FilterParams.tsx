"use client";
import { useState } from "react";
import s from "./styles.module.scss";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import SearchBar from "./SearchBar";
import More from "./More";
import clsx from "clsx";
import { AnimatePresence } from "motion/react";
import { useFilterContext } from "../context";
import { Checkbox } from "@/src/shared/ui";

const FilterParams = ({ title, type, data, defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const [all, setAll] = useState(false);

  const { filter, handleChange: changeFilter } = useFilterContext();
  const current = filter[type] || [];

  const handleChange = (item: (typeof data)[0]) => {
    const newFilter = [...current];
    if (newFilter.includes(item.slug)) {
      changeFilter(
        type,
        newFilter.filter((c) => c !== item.slug)
      );
    } else {
      newFilter.push(item.slug);
      changeFilter(type, newFilter);
    }
  };

  return (
    <div className={clsx(s.filter, { [s.filter_open]: open })}>
      <button className={s.header} onClick={() => setOpen((prev) => !prev)}>
        <span className={s.header__icon}>
          {open ? <MinusIcon /> : <PlusIcon />}
        </span>
        <span className={s.header__text}>{title}</span>
      </button>
      <div className={clsx(s.filter__body, { [s.filter__body_open]: open })}>
        <AnimatePresence>{all && <SearchBar key={"search"} />}</AnimatePresence>

        <ul className={clsx(s.list, { [s.list_all]: all })}>
          {data.map((item) => (
            <li key={item.id} className={s.list__item}>
              <Checkbox
                title={item.name}
                checked={current.includes(item.slug)}
                onChange={() => handleChange(item)}
              />
            </li>
          ))}
        </ul>

        <More all={all} onClick={() => setAll((prev) => !prev)} />
      </div>
    </div>
  );
};

interface Props {
  title: string;
  type: string;
  data: { id: number; name: string; slug: string }[];
  defaultOpen?: boolean;
}

export default FilterParams;
