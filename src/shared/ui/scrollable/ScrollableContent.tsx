import { createElement, ReactNode } from "react";
import { useScrollableContext } from "./provider";
import s from "./styles.module.scss";
import clsx from "clsx";

const ScrollableContent = ({ data, className, tag = "ul" }: Props) => {
  const { scrolled, ref, onScroll } = useScrollableContext();
  return (
    <div
      className={clsx(s.scroll, {
        [s.scroll_back]: scrolled.back,
        [s.scroll_forward]: scrolled.forward,
      })}
    >
      {createElement(
        tag,
        { className: clsx(s.scroll__content, className), ref, onScroll },
        data
      )}
    </div>
  );
};

interface Props {
  data: ReactNode[];
  tag?: "div" | "ul";
  className?: string;
}

export default ScrollableContent;
