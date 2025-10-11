import clsx from "clsx";
import { Link } from "@/src/shared/libs/i18n/navigation";
import s from "./styles.module.scss";

const NavLink = ({
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link className={clsx(s.nav__link, className)} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
