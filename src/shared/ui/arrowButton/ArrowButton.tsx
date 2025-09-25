import clsx from "clsx";
import { HTMLAttributes } from "react";
import s from "./styles.module.scss";

const ArrowButton = ({ className, direction, ...rest }: Props) => {
  return (
    <button
      className={clsx(s.button, s[`button__${direction}`], className)}
      {...rest}
    >
      <svg
        width="34"
        height="16"
        viewBox="0 0 34 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.8661 0.866117C25.3543 0.377961 26.1457 0.377961 26.6339 0.866117L32.8839 7.11612C33.372 7.60427 33.372 8.39573 32.8839 8.88388L26.6339 15.1339C26.1457 15.622 25.3543 15.622 24.8661 15.1339C24.378 14.6457 24.378 13.8543 24.8661 13.3661L28.9822 9.25H2C1.30964 9.25 0.75 8.69036 0.75 8C0.75 7.30964 1.30964 6.75 2 6.75H28.9822L24.8661 2.63388C24.378 2.14573 24.378 1.35427 24.8661 0.866117Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

interface Props extends HTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

export default ArrowButton;
