import { Logo, Nav } from "@/src/shared/ui";
import s from "./styles.module.scss";
import HeaderWrapper from "./HeaderWrapper";
import { getTranslations } from "next-intl/server";
import { LangSwitcher } from "./LangSwitcher";
import { Location } from "./Location";
import { Catalog } from "./Catalog";
import { getAllCategoriesApi } from "@/src/entities/category/api/getAllCategoriesApi";

const Header = async () => {
  const [t, cats] = await Promise.all([
    getTranslations("header"),
    getAllCategoriesApi("ru"),
  ]);
  return (
    <HeaderWrapper>
      <div className={s.header}>
        <Logo className={s.header__logo} />
        <Nav className={s.header__nav}>
          <Nav.List className={s.nav}>
            <Catalog
              href="/catalog/"
              title={t("nav.catalog")}
              categories={cats}
            />
            <Nav.Item className={s.nav__item}>
              <Nav.Link href={"#"} className={s.nav__link}>
                {t("nav.brands")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={s.nav__item}>
              <Nav.Link href={"#"} className={s.nav__link}>
                {t("nav.delivery")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={s.nav__item}>
              <Nav.Link href={"#"} className={s.nav__link}>
                {t("nav.about")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={s.nav__item}>
              <Nav.Link href={"#"} className={s.nav__link}>
                {t("nav.support")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={s.nav__item}>
              <Nav.Link href={"#"} className={s.nav__link}>
                {t("nav.salon")}
              </Nav.Link>
            </Nav.Item>
          </Nav.List>
        </Nav>
        <LangSwitcher className={s.header__lang} />
        <Location className={s.header__loc} />
        <div className={s.header__btns}></div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
