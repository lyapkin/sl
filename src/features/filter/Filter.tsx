import { HTMLAttributes, Suspense } from "react";
import FilterProvider from "./context/FilterContext";

const Filter = ({ className, children }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={className}>
      <Suspense>
        <FilterProvider className={className}>{children}</FilterProvider>
      </Suspense>
    </div>
  );
};

export default Filter;
