"use client";
import { HTMLAttributes } from "react";
import { Dropdown } from "@/src/shared/ui/dropdown";
import s from "./styles.module.scss";
import clsx from "clsx";
import { useSelectChange } from "../utils/useSelectChange";

const SortContent = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { current, handleChange, options } = useSelectChange();

  return (
    <Dropdown className={clsx(s.sort, className)}>
      <Dropdown.Trigger title={options[current]} className={s.sort__btn} />
      <Dropdown.List className={s.sort__list} maxHeight={80}>
        {Object.keys(options).map((key, i) => {
          return (
            <Dropdown.Item
              key={i}
              name="sort"
              value={options[key]}
              className={s.sort__item}
              onClick={() => handleChange(key)}
            />
          );
        })}
      </Dropdown.List>
    </Dropdown>
  );
};

export default SortContent;
