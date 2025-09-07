import { createContext, useContext } from "react";

interface Context {
  open: boolean;
  setOpen: (val: boolean) => void;
  title: string;
  side: "right" | "left";
  className?: string;
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
