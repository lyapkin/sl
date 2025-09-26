import Main from "./Dropdown";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";
import DropdownOption from "./DropdownOption";

const Dropdown = Object.assign(Main, {
  Trigger: DropdownButton,
  List: DropdownList,
  Item: DropdownOption,
});

export { Dropdown };
