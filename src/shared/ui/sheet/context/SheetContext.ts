"use client";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface Context {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  side: "right" | "left";
}

const SheetContext = createContext<Context>({} as Context);

export const useSheetContext = () => {
  const sheet = useContext(SheetContext);

  if (!sheet) {
    throw new Error("useSheetContext должен быть использован в Sheet");
  }

  return sheet;
};

export default SheetContext;
