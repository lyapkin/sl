import { Product, ProductPreview } from "@/src/entities/product";
import s from "./styles.module.scss";
import { AddToCart } from "@/src/features/cart";

const PreviewCard = ({ product }: Props) => {
  return (
    <Product product={product} className={s.card}>
      <Product.Img className={s.card__img} />
      <Product.Type className={s.card__type} />
      <Product.Title className={s.card__title} />
      <Product.Stock className={s.card__stock} />
      <Product.Price className={s.card__price} />
      <Product.Action className={s.card__cart}>
        <AddToCart itemId={product.id} />
      </Product.Action>
      <Product.Action className={s.card__fav}></Product.Action>
      <Product.Link className={s.card__link} />
    </Product>
  );
};

interface Props {
  product: ProductPreview;
}

export default PreviewCard;
