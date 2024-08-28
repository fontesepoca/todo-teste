import { ProductsType } from "./products";

export default interface MyContextType {
  products: ProductsType | undefined;
  setProducts: (products: ProductsType | undefined) => void;
}