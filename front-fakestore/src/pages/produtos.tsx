import { useEffect, useMemo } from "react";
import Layout from "fakestore/components/layout";
import getProducts from "fakestore/repositories/getProducts";
import useMyContext from "fakestore/context/useMyContext";
import Card from "fakestore/components/card";
import Loading from "fakestore/components/loading";
import DefaultProduct from "fakestore/components/defaultProduct";

export default function Product() {
  const { setProducts, products } = useMyContext();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const renderCards = useMemo(() => {
    if (products) {
      if (!products.length) return <DefaultProduct />;
      return products.map((product) => {
        return (
          <Card
            image={product.image}
            key={product.id}
            price={product.price}
            title={product.title}
          />
        );
      });
    }
    return <Loading />;
  }, [products]);

  return (
    <Layout>
      <body>{renderCards}</body>
    </Layout>
  );
}
