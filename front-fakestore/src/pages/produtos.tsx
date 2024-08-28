import { useEffect, useMemo } from "react";
import Layout from "fakestore/components/layout";
import getProducts from "fakestore/repositories/getProducts";
import useMyContext from "fakestore/context/useMyContext";
import Card from "fakestore/components/products/card";
import Loading from "fakestore/components/loading";
import DefaultProduct from "fakestore/components/defaultProduct";
import Filters from "fakestore/components/products/filters";
import getCategories from "fakestore/repositories/getCategories";

export default function Product() {
  const { setProducts, products, setCategories } = useMyContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const renderCards = useMemo(() => {
    if (products) {
      if (!products.length) return <DefaultProduct />;
      return (
        <>
          <Filters />
          {products.map((product) => {
            return (
              <Card
                image={product.image}
                key={product.id}
                price={product.price}
                title={product.title}
              />
            );
          })}
        </>
      );
    }
    return <Loading />;
  }, [products]);

  return <Layout>{renderCards}</Layout>;
}
