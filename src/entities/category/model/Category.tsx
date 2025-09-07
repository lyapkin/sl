import { Metadata } from "@/src/shared/models";

type CategoryBase = {
  id: number;
  name: string;
  slug: string;
};

type Category = {
  children: CategoryBase[];
  parents: CategoryBase[];
  metadata?: Metadata;
} & CategoryBase;

export default Category;
