import Main from "./Sheet";
import SheetContent from "./SheetContent";
import SheetTrigger from "./SheetTrigger";

const Sheet = Object.assign(Main, {
  Trigger: SheetTrigger,
  Content: SheetContent,
});

export { Sheet };
