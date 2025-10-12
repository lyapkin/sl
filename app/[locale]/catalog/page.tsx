import { Catalog } from "@/src/pages";

const Page = async ({ params }: PageProps<"/[locale]/catalog">) => {
  const { locale } = await params;
  return (
    <>
      <Catalog locale={locale} />
    </>
  );
};

export default Page;
