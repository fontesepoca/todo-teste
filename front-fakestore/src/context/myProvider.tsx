import { ProductsType } from "fakestore/@types/products";
import MyContext from "./myContext";
import { useState, FC, ReactNode } from "react";
import { CategoriesType } from "fakestore/@types/categories";

const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductsType>();
  const [categories, setCategories] = useState<CategoriesType>();

  return (
    <MyContext.Provider
      value={{ products, setProducts, categories, setCategories }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
