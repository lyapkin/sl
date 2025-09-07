import { HTMLAttributes } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";

const Button = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={clsx(s.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
