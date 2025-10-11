import { backFetch } from "@/src/shared/api";
import { Category } from "../model";

export const getAllCategoriesApi = async (
  lang: string
): Promise<Category[]> => {
  const res = await backFetch(`/${lang}/api/catalog/categories/`);
  return await res.json();
};
