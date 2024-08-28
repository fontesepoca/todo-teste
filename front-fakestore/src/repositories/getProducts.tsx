import { ProductsType } from "fakestore/@types/products";

export default async function getProducts(): Promise<
  ProductsType | undefined
> {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=100");
    const data: ProductsType = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
}
