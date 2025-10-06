"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { applyDiscountToPrice } from "../applyDiscountToPrice";

interface Context {
  resultPrice: number;
  price: number;
  discount?: number;
  currency: Currency;
  setCurrency: Dispatch<SetStateAction<Currency>>;
}

const PriceContext = createContext({} as Context);

const PriceProvider = ({ price, discount, children }: ProviderProps) => {
  const [currency, setCurrency] = useState(Currency.USD);
  const resultPrice = applyDiscountToPrice(price, discount);

  return (
    <PriceContext.Provider
      value={{ resultPrice, price, discount, currency, setCurrency }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export const usePriceContext = () => {
  const price = useContext(PriceContext);

  if (!price) {
    throw new Error("usePriceContext must be used inside Price");
  }

  return price;
};

enum Currency {
  USD,
  EUR,
  JPY,
}

export const currencies: [Currency, string][] = [
  [Currency.USD, "$"],
  [Currency.EUR, "€"],
  [Currency.JPY, "¥"],
];

export interface ProviderProps extends PropsWithChildren {
  price: number;
  discount: number | undefined;
}

export default PriceProvider;
