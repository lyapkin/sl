import { getProductsApi } from "../../api/getProductsApi";
import Slider from "./Slider";
import { Type } from "./types";

const Products = async ({ type }: Props) => {
  const products = await getProductsApi(
    new URLSearchParams({ page: "1", type })
  );
  return <Slider slides={products.results} />;
};

interface Props {
  type: Type;
}

export default Products;
