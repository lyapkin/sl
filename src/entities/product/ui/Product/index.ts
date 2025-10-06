import Main from "./Product";
import ProductAction from "./ProductAction";
import ProductImg from "./ProductImg";
import ProductLink from "./ProductLink";
import ProductPrice from "./ProductPrice";
import ProductStock from "./ProductStock";
import ProductTitle from "./ProductTitle";
import ProductType from "./ProductType";

const Product = Object.assign(Main, {
  Action: ProductAction,
  Img: ProductImg,
  Link: ProductLink,
  Price: ProductPrice,
  Stock: ProductStock,
  Title: ProductTitle,
  Type: ProductType,
});

export { Product };
