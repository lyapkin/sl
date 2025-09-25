"use client";
import { PropsWithChildren, useState } from "react";
import SheetContext from "./context";

const Sheet = ({ children, side, title = "" }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <SheetContext.Provider value={{ open, setOpen, side, title }}>
      {children}
    </SheetContext.Provider>
  );
};

interface Props extends PropsWithChildren {
  title?: string;
  side: "left" | "right";
}

export default Sheet;
