"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import s from "./styles.module.scss";
import clsx from "clsx";
import { HeaderContext } from "../context";

const HeaderWrapper = ({ children }: PropsWithChildren) => {
  const [hover, setHover] = useState(false);
  const [shrink, setShrink] = useState<boolean | null>(null);

  useEffect(() => {
    scroll();

    function scroll() {
      if (document.documentElement.scrollTop > 88) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <header
      className={clsx(s.wrapper, {
        [s.wrapper_hover]: hover,
        [s.wrapper_shrink]: shrink,
        [s.wrapper_hidden]: shrink === null,
      })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="container">
        {shrink !== null && (
          <HeaderContext.Provider value={{ shrinked: shrink }}>
            {children}
          </HeaderContext.Provider>
        )}
      </div>
    </header>
  );
};

export default HeaderWrapper;
