import { CategoriesType } from "fakestore/@types/categories";

export default async function getCategories(): Promise<CategoriesType> {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data: CategoriesType = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}
