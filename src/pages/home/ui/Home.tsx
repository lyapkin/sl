import { Hero } from "./Hero";
import { ProductsSection } from "./ProductsSection";

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
