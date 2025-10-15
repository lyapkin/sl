import { Skeleton } from "@/src/shared/ui";
import s from "./styles.module.scss";

const PreviewCardSkeleton = () => {
  return (
    <div className={s.skeleton}>
      <Skeleton className={s.skeleton__img} />
      <Skeleton className={s.skeleton__type} />
      <div className={s.skeleton__title}>
        <Skeleton className={s.skeleton__line} />
        <Skeleton className={s.skeleton__line} />
      </div>
      <Skeleton className={s.skeleton__stock} />
      <Skeleton className={s.skeleton__price} />
      <Skeleton className={s.skeleton__currency} />
      <Skeleton className={s.skeleton__cart} />
      <Skeleton className={s.skeleton__link} />
    </div>
  );
};

export default PreviewCardSkeleton;
