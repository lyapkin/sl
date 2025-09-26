"use client";
import { InputHTMLAttributes } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";
import { useDropdownContext } from "./context";

const DropdownOption = ({
  value,
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  const { setOpen } = useDropdownContext();
  return (
    <li onClick={() => setOpen(false)}>
      <label className={clsx(s.dropdown__option, className)}>
        {value}
        <input type="radio" value={value} {...rest} />
      </label>
    </li>
  );
};

export default DropdownOption;
