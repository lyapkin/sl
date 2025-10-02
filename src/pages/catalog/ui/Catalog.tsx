import { Sort } from "@/src/features/sort";
import { Categories } from "./Categories";
import Filters from "./Filters";
import Header from "./Header";
import { ProductsList } from "@/src/widgets/product";
import s from "./styles.module.scss";
import clsx from "clsx";

const Catalog = ({}: Props) => {
  return (
    <main>
      <Header className={s.header} />
      <div className={clsx(s.catalog, "container")}>
        {_dumpCategories && _dumpCategories.length > 0 && (
          <Categories
            className={s.catalog__categories}
            categories={_dumpCategories}
          />
        )}
        <Filters className={s.catalog__filters} />
        <Sort className={s.catalog__sort} />
        <ProductsList className={s.catalog__products} />
      </div>
    </main>
  );
};

interface Props {
  slug?: string;
}

const _dumpCategories = [
  { id: 1, name: "Категория", slug: "cat1" },
  { id: 2, name: "Категория", slug: "cat2" },
  { id: 3, name: "Категория", slug: "cat3" },
  { id: 4, name: "Категория", slug: "cat4" },
  { id: 5, name: "Категория", slug: "cat5" },
  { id: 6, name: "Категория", slug: "cat6" },
  { id: 7, name: "Категория", slug: "cat7" },
  { id: 8, name: "Категория", slug: "cat8" },
  { id: 9, name: "Категория", slug: "cat9" },
];

export default Catalog;
