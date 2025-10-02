import { getPageApi } from "@/src/shared/api";
import clsx from "clsx";
import { HTMLAttributes } from "react";

const Header = async ({ title, className }: Props) => {
  if (title) {
    return (
      <header className={clsx(className)}>
        <div className="container">
          <h1>{title}</h1>
        </div>
      </header>
    );
  }

  const page = await getPageApi("catalog");

  return (
    <header className={clsx(className)}>
      <div className="container">
        <h1>{page.title}</h1>
      </div>
    </header>
  );
};

interface Props extends HTMLAttributes<HTMLElement> {
  title?: string;
}

export default Header;
