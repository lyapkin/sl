import clsx from "clsx";
import { PriceProvider, ProviderProps } from "./provider";
import s from "./styles.module.scss";

const Price = ({ className, ...rest }: Props) => {
  return (
    <div className={clsx(s.price, className)}>
      <PriceProvider {...rest} />
    </div>
  );
};

interface Props extends ProviderProps {
  className?: string;
}

export default Price;
