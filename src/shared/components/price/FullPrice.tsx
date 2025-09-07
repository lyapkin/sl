const FullPrice = ({ price, discount, className }: Props) => {
  return discount ? (
    <span
      className={className}
      style={{ textDecoration: "line-through" }}
    >{`${price} ₽`}</span>
  ) : null;
};

interface Props {
  price: number;
  discount: number | undefined;
  className?: string;
}

export default FullPrice;
