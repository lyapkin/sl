import { HTMLAttributes } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";

const Skeleton = ({ light = false, className, ...rest }: SkeletonProps) => {
  return (
    <span className={className} style={{ display: "inline-block" }} {...rest}>
      <span
        className={clsx(s.skeleton, light ? s.skeleton_light : s.skeleton_dark)}
      />
    </span>
  );
};

interface SkeletonProps extends HTMLAttributes<HTMLElement> {
  light?: boolean;
}

export default Skeleton;
