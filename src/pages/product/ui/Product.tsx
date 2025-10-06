import { ProductDetail } from "@/src/entities/product";
import s from "./styles.module.scss";
import { Imgs } from "./Imgs";
import Stock from "./Stock";
import Description from "./Description";
import Attrs from "./Attrs";
import Ingrs from "./Ingrs";
import { AddToCart } from "@/src/features/cart";
import { AddToFavorite } from "@/src/features/favorite";
import clsx from "clsx";
import { Price } from "@/src/entities/product";

const ProductPage = ({ product }: Props) => {
  return (
    <main className={clsx(s.product, "container")}>
      <h1 className={s.product__title}>{product.name}</h1>
      <p className={s.product__type}>{product.type}</p>
      <Imgs
        imgs={product.imgs}
        alt={product.name}
        className={s.product__imgs}
      />
      <Stock stock={product.stock} className={s.product__stock} />
      <Price
        price={product.price}
        discount={product.discount}
        className={clsx(s.product__price, s.price)}
      >
        <div className={s.price__price}>
          <Price.Result />
          <Price.Full />
        </div>
        <Price.Currency className={s.price__currency} />
      </Price>
      <div className={s.product__actions}>
        <AddToCart itemId={product.id} className={s.product__cart} />
        <AddToFavorite itemId={product.id} className={s.product__fav} />
      </div>
      <Description
        description={product.description}
        name={product.name}
        code={product.code}
        className={s.product__description}
      />
      <Attrs attrs={product.attrs} className={s.product__attrs} />
      <Ingrs ingrs={product.ingrs} className={s.product__ingrs} />
    </main>
  );
};

interface Props {
  product: ProductDetail;
}

export default ProductPage;
