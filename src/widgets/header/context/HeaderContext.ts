import { createContext, useContext } from "react";

interface Context {
  shrinked: boolean;
}

const HeaderContext = createContext({} as Context);

export default HeaderContext;

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};
