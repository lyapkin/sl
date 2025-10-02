import Main from "./Scrollable";
import ScrollableControl from "./ScrollableControl";
import ScrollableContent from "./ScrollableContent";

const Scrollable = Object.assign(Main, {
  Content: ScrollableContent,
  Control: ScrollableControl,
});

export { Scrollable };
