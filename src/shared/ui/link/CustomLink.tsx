import clsx from "clsx";
import { Link } from "../../libs";
import s from "./styles.module.scss";

const CustomLink = ({
  children,
  className,
  variant = "primary",
  ...rest
}: Props) => {
  return (
    <Link className={clsx(s.link, className, s[`link__${variant}`])} {...rest}>
      {children}
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.25 0.75L16.5 7M16.5 7L10.25 13.25M16.5 7H1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

interface Props extends React.ComponentProps<typeof Link> {
  variant?: "primary" | "secondary";
}

export default CustomLink;
