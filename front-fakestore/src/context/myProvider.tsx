import { ProductsType, ProductType } from "fakestore/@types/products";
import MyContext from "./myContext";
import { useState, FC, ReactNode } from "react";
import { CategoriesType } from "fakestore/@types/categories";

const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductsType>();
  const [categories, setCategories] = useState<CategoriesType>();
  const [productSelected, setProductSelected] = useState<ProductType>();

  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        productSelected,
        setProductSelected,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
