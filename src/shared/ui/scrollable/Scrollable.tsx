import { PropsWithChildren } from "react";
import { ScrollableProvider } from "./provider";

const Scrollable = ({ children }: PropsWithChildren) => {
  return <ScrollableProvider>{children}</ScrollableProvider>;
};

export default Scrollable;
