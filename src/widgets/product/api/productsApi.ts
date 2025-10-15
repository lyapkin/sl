import { ProductPreview } from "@/src/entities/product";
import { Paginated } from "@/src/features/pagination";
import { endpoints } from "@/src/shared/api";

export const productsApi = endpoints.injectEndpoints({
  endpoints: (build) => ({
    getProductsList: build.query<Paginated<ProductPreview>, string>({
      query: (params) => {
        return `catalog/products/${params ? "?" + params : ""}`;
        return "catalog/products/";
      },
    }),
  }),
});

export const { useGetProductsListQuery } = productsApi;
