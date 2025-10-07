import Image from "next/image";
import s from "./styles.module.scss";
import clsx from "clsx";
import { Link } from "../../libs";

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"} className={clsx(s.logo, className)}>
      <Image src={"/images/logo.png"} fill alt={""} />
    </Link>
  );
};

interface Props {
  className?: string;
}

export default Logo;
