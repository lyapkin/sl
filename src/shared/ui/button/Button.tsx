import { HTMLAttributes } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";

const Button = ({ className, type = "primary", children, ...rest }: Props) => {
  return (
    <button
      className={clsx(s.button, s[`button__${type}`], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default Button;
