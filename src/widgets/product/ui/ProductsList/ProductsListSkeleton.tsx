import { HTMLAttributes } from "react";
import { PreviewCardSkeleton } from "../PreviewCard";

const ProductsListSkeleton = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={className}>
      {arr.map((_, index) => {
        return <PreviewCardSkeleton key={index} />;
      })}
    </div>
  );
};

const arr = [...Array(12)];

export default ProductsListSkeleton;
