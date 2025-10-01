"use client";
import { usePathname } from "next/navigation";
import { useFilterContext } from "./context";
import React, { ButtonHTMLAttributes, isValidElement } from "react";

const FilterApply = ({
  children,
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const button = React.Children.only(children);
  if (React.Children.count(children) !== 1 || !isValidElement(button)) {
    throw new Error("FilterApply gets only one button as children");
  }

  const { filter } = useFilterContext();
  const path = usePathname();

  const applyFilter = (_: React.MouseEvent<HTMLButtonElement>) => {
    const newParams: [string, string][] = [];
    Object.entries(filter).forEach((item) => {
      const key = item[0];
      for (const val of item[1]) {
        newParams.push([key, val]);
      }
    });
    const usp = new URLSearchParams(newParams);

    usp.delete("page");

    const uspStr = usp.toString();
    const loc = uspStr ? `${path}?${uspStr}` : path;
    window.history.pushState(null, "", loc);

    if (onClick) {
      onClick(_);
    }
  };

  return React.cloneElement(button, {
    onClick: applyFilter,
  } as React.ButtonHTMLAttributes<HTMLButtonElement>);
};

export default FilterApply;
