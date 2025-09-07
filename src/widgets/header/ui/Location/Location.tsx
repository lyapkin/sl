import { HTMLAttributes } from "react";
import { LocationIcon } from "./LocationIcon";

const Location = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={className}>
      <LocationIcon /> Санкт-Петербург / Галерный 5
    </div>
  );
};

export default Location;
