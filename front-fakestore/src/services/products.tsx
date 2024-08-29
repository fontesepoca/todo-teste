import { OrderTypes } from "fakestore/@types/components/filters";
import { ProductsType } from "fakestore/@types/products";

export function filterByName(products: ProductsType, nameProduct: string) {
  return products.filter((product) => {
    return (
      product.title.toUpperCase().includes(nameProduct.toUpperCase()) ||
      product.description.toUpperCase().includes(nameProduct.toUpperCase())
    );
  });
}

export function filterByCategorie(
  products: ProductsType,
  nameCategorie: string | undefined
) {
  if (nameCategorie) {
    return products.filter((product) => {
      return product.category
        .toUpperCase()
        .includes(nameCategorie.toUpperCase());
    });
  }
  return products;
}

export function filterByOrder(
  products: ProductsType,
  typeOrder: OrderTypes | undefined
) {
  if (typeOrder) {
    return products.sort((a, b) => {
      switch (typeOrder) {
        case "name asc":
          return a.title.localeCompare(b.title);
        case "name desc":
          return b.title.localeCompare(a.title);
        case "price asc":
          return a.price - b.price;
        case "price desc":
          return b.price - a.price;
        default:
          return 1;
      }
    });
  }
  return products;
}
