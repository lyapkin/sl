import { useTranslations } from "next-intl";
import s from "./styles.module.scss";
import { motion } from "motion/react";

const SearchBar = () => {
  const t = useTranslations("filters");
  return (
    <motion.form
      className={s.search}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { height: "0px", opacity: 0 },
        visible: { height: "44px", opacity: 1 },
      }}
      transition={{ duration: 0.2 }}
    >
      <input
        type="text"
        name="name"
        placeholder={t("find")}
        className={s.search__input}
      />
      <button className={s.search__btn}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 16.5L12.1694 12.1694M12.1694 12.1694C13.3004 11.0384 14 9.47589 14 7.75C14 4.29822 11.2018 1.5 7.75 1.5C4.29822 1.5 1.5 4.29822 1.5 7.75C1.5 11.2018 4.29822 14 7.75 14C9.47589 14 11.0384 13.3004 12.1694 12.1694Z"
            stroke="#676E76"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </motion.form>
  );
};

export default SearchBar;
