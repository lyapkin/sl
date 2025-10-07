import Main from "./Nav";
import NavItem from "./NavItem";
import NavList from "./NavList";

const Nav = Object.assign(Main, {
  List: NavList,
  Item: NavItem,
});

export { Nav };
