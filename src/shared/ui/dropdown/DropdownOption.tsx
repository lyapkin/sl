import { InputHTMLAttributes } from "react";
import s from "./styles.module.scss";

const DropdownOption = ({
  value,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <li className={s.dropdown__option}>
      <label>
        {value}
        <input type="radio" value={value} {...rest} />
      </label>
    </li>
  );
};

export default DropdownOption;
