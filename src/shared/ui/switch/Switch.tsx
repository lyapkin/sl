import clsx from "clsx";
import s from "./styles.module.scss";
import { HTMLAttributes } from "react";

const Switch = ({ on, className, ...rest }: Props) => {
  return (
    <button
      className={clsx(s.switch, className, { [s.switch_on]: on })}
      {...rest}
    ></button>
  );
};

interface Props extends HTMLAttributes<HTMLButtonElement> {
  on: boolean;
}

export default Switch;
