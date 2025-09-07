import { ProductsSection } from "@/src/widgets/product";
import { Hero } from "./Hero";

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductsSection type="news" />
      <ProductsSection type="hits" />
    </main>
  );
};

export default Home;
