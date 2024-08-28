import { CategoriesType } from "./categories";
import { ProductsType } from "./products";

export default interface MyContextType {
  products: ProductsType | undefined;
  setProducts: (products: ProductsType | undefined) => void;
  categories: CategoriesType | undefined;
  setCategories: (categories: CategoriesType) => void;
}