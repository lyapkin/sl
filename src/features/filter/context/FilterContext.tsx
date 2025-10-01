"use client";
import { useSearchParams } from "next/navigation";
import { createContext, HTMLAttributes, useContext, useState } from "react";

interface Context {
  filter: Record<string, string[]>;
  handleChange: (type: string, value?: string[]) => void;
}

const FilterContext = createContext({} as Context);

const FilterProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState(() => {
    const filter: Record<string, string[]> = {};
    for (const key of searchParams.keys()) {
      filter[key as keyof typeof filter] = searchParams.getAll(key);
    }
    return filter;
  });

  const handleChange = (type: string, value?: string[]) => {
    if (value && value.length > 0) {
      setFilter((prev) => ({
        ...prev,
        [type]: value,
      }));
    } else {
      setFilter((prev) => {
        const newState = {
          ...prev,
        };
        delete newState[type];

        return newState;
      });
    }
  };

  return (
    <FilterContext.Provider value={{ filter, handleChange }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const filters = useContext(FilterContext);

  if (!filters) {
    throw new Error("useFilterContext must be used inside Filter");
  }

  return filters;
};

export default FilterProvider;
