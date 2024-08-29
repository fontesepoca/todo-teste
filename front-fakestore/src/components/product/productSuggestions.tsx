import useMyContext from "fakestore/context/useMyContext";
import suggestionsStyles from "fakestore/styles/components/product/product-suggestions.module.css";
import { useMemo } from "react";
import DefaultProduct from "../defaultProduct";
import { filterByCategorie } from "fakestore/services/products";
import Card from "../products/card";

export default function ProductSuggestions() {
  const { products, productSelected } = useMyContext();

  const renderCards = useMemo(() => {
    if (products && productSelected) {
      const filteredProducts = filterByCategorie(
        products,
        productSelected.category
      );

      if (filteredProducts.length) {
        return filteredProducts.map((product) => {
          return (
            <Card
              image={product.image}
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
            />
          );
        });
      }
    }
  }, [products, productSelected]);

  return (
    <footer className={suggestionsStyles["fakestore_product_suggestions"]}>
      {renderCards}
    </footer>
  );
}
