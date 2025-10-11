import clsx from "clsx";
import s from "./styles.module.scss";
import { HTMLAttributes } from "react";

const Nav = ({ children, className }: HTMLAttributes<HTMLUListElement>) => {
  return <nav className={clsx(s.nav, className)}>{children}</nav>;
};

export default Nav;
