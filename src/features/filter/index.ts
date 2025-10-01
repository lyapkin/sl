import { default as Main } from "./Filter";
import FilterApply from "./FilterApply";
import { FilterParams } from "./FIlterParams";
import { FilterRange } from "./FilterRange";
import { FilterToggle } from "./FilterToggle";

const Filter = Object.assign(Main, {
  Toggle: FilterToggle,
  Range: FilterRange,
  Params: FilterParams,
  Apply: FilterApply,
});

export default Filter;
