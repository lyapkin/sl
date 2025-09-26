"use client";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface Context {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownContext = createContext({} as Context);

export const useDropdownContext = () => {
  const dropdown = useContext(DropdownContext);

  if (!dropdown) {
    throw new Error("useDropdownContext должен быть использован в Dropdown");
  }

  return dropdown;
};

export default DropdownContext;
