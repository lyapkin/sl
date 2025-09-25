"use client";
import { PropsWithChildren } from "react";
import { useSheetContext } from "./context";
import clsx from "clsx";
import s from "./styles.module.scss";

const SheetTrigger = ({ className, children, ...rest }: Props) => {
  const { setOpen } = useSheetContext();
  return (
    <button
      className={clsx(s.sheet__trigger, className)}
      {...rest}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

interface Props extends PropsWithChildren {
  className?: string;
}

export default SheetTrigger;
