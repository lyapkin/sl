// import { Metadata } from "@/src/shared/models";

type Category = {
  id: number;
  name: string;
  slug: string;
  children: Category[];
};

// type CategoryBase = {
//   id: number;
//   name: string;
//   slug: string;
// };

// type Category = {
//   children: CategoryBase[];
//   parents: CategoryBase[];
//   metadata?: Metadata;
// } & CategoryBase;

export default Category;
