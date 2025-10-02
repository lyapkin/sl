import { getProductsApi } from "../../../../widgets/product/api/getProductsApi";
import Slider from "./Slider";
import { Type } from "./types";

const Products = async ({ type }: Props) => {
  const products = await getProductsApi(
    new URLSearchParams({ page: "1", type })
  );
  // TODO: correct styles during render or replace lsider with skeleton
  return <Slider type={type} slides={products.results} />;
};

interface Props {
  type: Type;
}

export default Products;
