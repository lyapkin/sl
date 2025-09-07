import s from "./styles.module.scss";
import { LiHTMLAttributes } from "react";
import clsx from "clsx";
import { Link } from "@/src/shared/libs/i18n/navigation";

const NavItem = ({ link, className, children }: NavItemProps) => {
  return (
    <li className={clsx(s.nav__item, className)}>
      <Link href={link}>{children}</Link>
    </li>
  );
};

interface NavItemProps extends LiHTMLAttributes<HTMLLIElement> {
  link: string;
}

export default NavItem;
