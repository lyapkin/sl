import { ProductBase } from "@/src/entities/product";
import { HTMLAttributes } from "react";

const AddToFavorite = ({ itemId, ...rest }: Props) => {
  return <></>;
};

interface Props extends HTMLAttributes<HTMLElement> {
  itemId: ProductBase["id"];
}

export default AddToFavorite;
