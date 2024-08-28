import MyContextType from "fakestore/@types/myContext";
import { useContext } from "react";
import MyContext from "./myContext";

const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("Algo deu errado!");
  }
  return context;
};
