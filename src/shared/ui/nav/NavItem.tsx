import s from "./styles.module.scss";
import { LiHTMLAttributes } from "react";
import clsx from "clsx";

const NavItem = ({
  className,
  children,
  ...rest
}: LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={clsx(s.nav__item, className)} {...rest}>
      {children}
    </li>
  );
};

export default NavItem;
