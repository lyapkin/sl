import { PropsWithChildren } from "react";

const NavList = ({ children, className }: Props) => {
  return <ul className={className}>{children}</ul>;
};

interface Props extends PropsWithChildren {
  className?: string;
}

export default NavList;
