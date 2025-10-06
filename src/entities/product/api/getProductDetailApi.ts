import { ProductDetail } from "../model";

export const getProductDetailApi = async (
  slug: string
): Promise<ProductDetail> => {
  return {
    id: 1,
    slug: "product1",
    name: "MA:NYO bifida biome complex ampoule",
    stock: true,
    price: 43.45,
    discount: 20,
    code: "19000200456",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    attrs: [
      { name: "Страна", value: "Россия" },
      { name: "Применение", value: "Лицо" },
      { name: "Для кого", value: "Унисекс" },
    ],
    ingrs:
      "ISODODECANE, MICA, DISTEARDIMO­NIUM HECTORITE, TRIMETHYLSILOXYSILICATE, Cl 77891 (TITANIUM DIOXIDE), Cl 77499 (IRON OXIDES), SYNTHETIC BEESWAX, POLYESTER-4, SYNTHETIC WAX, ALUMINUM STARCH OCTENYLSUCCINATE, SORBITAN SESQUIOLEATE, TRIHYDROXYSTEARIN, Cl 77491 (IRON OXIDES), PHENOXYETHANOL, Cl 77510 (FERRIC FERROCVANIDE), AQUA (WATER), PROPYLENE CARBONATE, TOCOPHEROL, BHT",
    imgs: [
      { id: 1, img: "/__dump/images/product.png" },
      { id: 2, img: "/__dump/images/product.png" },
      { id: 3, img: "/__dump/images/product.png" },
      { id: 4, img: "/__dump/images/product.png" },
      { id: 5, img: "/__dump/images/product.png" },
      { id: 6, img: "/__dump/images/product.png" },
    ],
    type: "Сыворотка для лица",
  };
};
