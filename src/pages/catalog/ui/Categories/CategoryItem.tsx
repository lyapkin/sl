import { Category as Category } from "@/src/entities/category";
import s from "./styles.module.scss";
import { Link } from "@/src/shared/libs/i18n/navigation";

const CategoryItem = ({ category }: Props) => {
  return (
    <li>
      <Link href={`/catalog/${category.slug}/`} className={s.categories__item}>
        {category.name}
      </Link>
    </li>
  );
};

interface Props {
  category: Category["children"][number];
}

export default CategoryItem;
