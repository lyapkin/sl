"use client";
import React, { ButtonHTMLAttributes, isValidElement } from "react";
import { useSheetContext } from "./context";

const SheetTrigger = ({
  children,
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const button = React.Children.only(children);
  if (React.Children.count(children) !== 1 || !isValidElement(button)) {
    throw new Error("FilterApply gets only one button as children");
  }

  const { setOpen } = useSheetContext();

  const handleClick = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(_);
    }
    setOpen((prev) => !prev);
  };

  return React.cloneElement(button, {
    onClick: handleClick,
  } as React.ButtonHTMLAttributes<HTMLButtonElement>);
};

export default SheetTrigger;
