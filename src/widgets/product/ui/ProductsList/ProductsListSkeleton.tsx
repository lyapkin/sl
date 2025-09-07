import { HTMLAttributes } from "react";
import { PreviewCardSkeleton } from "../PreviewCard";

const ProductsListSkeleton = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <ul className={className}>
      {arr.map((_, index) => {
        return <PreviewCardSkeleton key={index} />;
      })}
    </ul>
  );
};

const arr = [...Array(12)];

export default ProductsListSkeleton;
