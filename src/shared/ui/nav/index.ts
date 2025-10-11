import Main from "./Nav";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import NavList from "./NavList";

const Nav = Object.assign(Main, {
  List: NavList,
  Item: NavItem,
  Link: NavLink,
});

export { Nav };
