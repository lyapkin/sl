import { HTMLAttributes, Suspense } from "react";
import SortContent from "./SortContent";
import { Skeleton } from "@/src/shared/ui";

const Sort = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <Suspense fallback={<Skeleton className={className} />}>
      <SortContent className={className} />
    </Suspense>
  );
};

export default Sort;
