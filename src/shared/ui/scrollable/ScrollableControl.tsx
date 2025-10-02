import {
  ButtonHTMLAttributes,
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from "react";
import { Direction, useScrollableContext } from "./provider";

const ScrollableControl = ({ children, direction }: Props) => {
  const button = Children.only(children);
  if (Children.count(children) !== 1 || !isValidElement(button)) {
    throw new Error("FilterApply gets only one button as children");
  }

  const { clickScroll, ref, scrolled } = useScrollableContext();

  return cloneElement(button, {
    onClick: clickScroll(ref, direction),
    disabled: !scrolled[direction],
  } as ButtonHTMLAttributes<HTMLButtonElement>);
};

interface Props extends PropsWithChildren {
  direction: Direction;
}

export default ScrollableControl;
