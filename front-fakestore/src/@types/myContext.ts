import { CategoriesType } from "./categories";
import { ProductsType, ProductType } from "./products";

export default interface MyContextType {
  products: ProductsType | undefined;
  setProducts: (products: ProductsType | undefined) => void;
  categories: CategoriesType | undefined;
  setCategories: (categories: CategoriesType) => void;
  productSelected: ProductType | undefined;
  setProductSelected: (productSelected: ProductType) => void;
}
