"use client";
import { HTMLAttributes } from "react";
import { Dropdown } from "@/src/shared/ui/dropdown";
import useSelectChange from "../utils/useSelectChange";

const SortContent = ({ className }: HTMLAttributes<HTMLElement>) => {
  const { currentValue, handleChange, options } = useSelectChange();
  return (
    <Dropdown
      className={className}
      data={options}
      defaultVal={currentValue}
      handleChange={handleChange}
    />
  );
};

export default SortContent;
