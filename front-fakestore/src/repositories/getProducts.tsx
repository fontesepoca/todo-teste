import { ProductsType, ProductType } from "fakestore/@types/products";

export default async function getProducts(
  id?: number
): Promise<ProductsType | ProductType | undefined> {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products${id ? "/" + id : "?limit=100"}`
    );
    const data: ProductsType | ProductType = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
