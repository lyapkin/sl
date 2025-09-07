import { Catalog } from "@/src/pages";

const Page = async ({ params }: PageProps<"/[locale]/catalog/[slug]">) => {
  const { slug } = await params;
  return (
    <>
      <Catalog slug={slug} />
    </>
  );
};

export default Page;
