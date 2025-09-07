import { default as Main } from "./Filters";
import { FilterRange } from "./FilterRange";
import { FilterToggle } from "./FilterToggle";

const Filters = Object.assign(Main, {
  Toggle: FilterToggle,
  Range: FilterRange,
});

export default Filters;
