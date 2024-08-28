import { ProductsType } from "fakestore/@types/products";
import MyContext from "./myContext";
import { useState, FC, ReactNode } from "react";

const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductsType | undefined>();

  return (
    <MyContext.Provider value={{ products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;