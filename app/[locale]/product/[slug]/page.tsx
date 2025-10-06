import { getProductDetailApi } from "@/src/entities/product/api";
import { Product } from "@/src/pages";

const Page = async ({ params }: PageProps<"/[locale]/product/[slug]">) => {
  const { slug } = await params;
  const product = await getProductDetailApi(slug);
  return (
    <>
      <div className={"container top top-small"}></div>
      <Product product={product} />
    </>
  );
};

export default Page;
