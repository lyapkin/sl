import { Catalog } from "@/src/pages";

const Page = async ({ params }: PageProps<"/[locale]/catalog/[slug]">) => {
  const { slug, locale } = await params;

  return (
    <>
      <Catalog categorySlug={slug} locale={locale} />
    </>
  );
};

export default Page;
