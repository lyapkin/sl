import { applyDiscountToPrice } from "./applyDiscountToPrice";

const ResultPrice = ({ price, discount, className }: Props) => {
  return (
    <span className={className}>{`${applyDiscountToPrice(
      price,
      discount
    )} ₽`}</span>
  );
};

interface Props {
  price: number;
  discount: number | undefined;
  className?: string;
}

export default ResultPrice;
