import { ProductsType } from "fakestore/@types/products";
import MyContext from "./myContext";
import { useState, FC, ReactNode } from "react";
import ErrorType from "fakestore/@types/error";

const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductsType | ErrorType | undefined>();

  return (
    <MyContext.Provider value={{ products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;