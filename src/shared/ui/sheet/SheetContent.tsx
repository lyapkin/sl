"use client";
import { PropsWithChildren } from "react";
import { useSheetContext } from "./context";
import { CloseButton } from "../closeButton";
import s from "./styles.module.scss";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

const SheetContent = ({ children }: PropsWithChildren) => {
  const { open, setOpen, title, side } = useSheetContext();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={s.sheet}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
            visible: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
        >
          <div className={clsx(s.sheet__wrapper, s[`sheet__wrapper${side}`])}>
            <motion.div
              className={s.sheet__content}
              onClick={(e) => e.stopPropagation()}
              initial="hidden"
              animate="visible"
              exit={"hidden"}
              variants={{
                hidden: { [side]: "-100%" },
                visible: { [side]: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <header className={s.sheet__header}>
                <p>{title}</p>
                <CloseButton
                  className={s.sheet__close}
                  onClick={() => setOpen(false)}
                />
              </header>
              <div className={s.sheet__body}>{children}</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SheetContent;
