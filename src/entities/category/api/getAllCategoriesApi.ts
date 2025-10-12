import { backFetch } from "@/src/shared/api";
import { Category } from "../model";
import { Lang } from "@/src/shared/models";

export const getAllCategoriesApi = async (lang: Lang): Promise<Category[]> => {
  const res = await backFetch(`/${lang}/api/catalog/categories/`);
  return await res.json();
};
