import { ProductBase } from "@/src/entities/product";
import { Button } from "@/src/shared/ui";
import { HTMLAttributes } from "react";

const AddToCart = ({ itemId, ...rest }: Props) => {
  return <Button {...rest}>Добавить в корзину</Button>;
};

interface Props extends HTMLAttributes<HTMLElement> {
  itemId: ProductBase["id"];
}

export default AddToCart;
