"use client";
import {
  createContext,
  PropsWithChildren,
  RefObject,
  UIEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Ref = HTMLElement;

export type Direction = "back" | "forward";

interface Context {
  scrolled: {
    back: boolean;
    forward: boolean;
  };
  ref: RefObject<Ref | null>;
  onScroll: UIEventHandler<HTMLElement>;
  clickScroll: (ref: Context["ref"], direction: Direction) => () => void;
}

const ScrollableContext = createContext({} as Context);

const ScrollableProvider = ({ children }: PropsWithChildren) => {
  const ref = useRef<Ref>(null);
  const [scrolled, setScrolled] = useState<Context["scrolled"]>({
    back: false,
    forward: false,
  });

  useEffect(() => {
    handleScroll();
  }, []);

  const handleScroll = () => {
    if (ref.current) {
      const ul = ref.current;
      let back = false;
      let forward = false;

      if (ul.scrollWidth <= ul.clientWidth) {
        setScrolled({ back, forward });
        return;
      }

      if (ul.scrollLeft > 0) {
        back = true;
      }
      if (ul.scrollLeft + ul.clientWidth < ul.scrollWidth) {
        forward = true;
      }
      setScrolled({ back, forward });
    }
  };

  const clickScroll = (ref: Context["ref"], direction: Direction) => {
    return () => {
      if (ref.current) {
        const ul = ref.current;
        const scroll = 120;
        ul.scrollBy({
          left: direction === "back" ? -scroll : scroll,
          behavior: "smooth",
        });
      }
    };
  };

  return (
    <ScrollableContext.Provider
      value={{ scrolled, ref, onScroll: handleScroll, clickScroll }}
    >
      {children}
    </ScrollableContext.Provider>
  );
};

export const useScrollableContext = () => {
  const context = useContext(ScrollableContext);

  if (!context) {
    throw new Error("useScrollableContext must be used inside Scrollable");
  }

  return context;
};

export default ScrollableProvider;
