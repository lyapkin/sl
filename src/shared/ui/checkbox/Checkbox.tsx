import clsx from "clsx";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import s from "./styles.module.scss";

const Checkbox = ({ title, className, checked, ...rest }: Props) => {
  return (
    <label className={clsx(s.input, className)}>
      <input type="checkbox" checked {...rest} />
      <span
        className={clsx(s.input__checkbox, {
          [s.input__checkbox_checked]: checked,
        })}
      >
        {checked && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 5.375L4.25 8.375L8.75 1.625"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className={s.input__title}>{title}</span>
    </label>
  );
};

interface Props
  extends InputHTMLAttributes<Omit<HTMLInputElement, HTMLInputTypeAttribute>> {
  title: string;
}

export default Checkbox;
