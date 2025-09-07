import { HTMLAttributes } from "react";

const ProductAction = ({ children, ...rest }: HTMLAttributes<HTMLElement>) => {
  return <div {...rest}>{children}</div>;
};

export default ProductAction;
