import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Layout from "fakestore/components/layout";
import useMyContext from "fakestore/context/useMyContext";
import getProducts from "fakestore/repositories/getProducts";
import { ProductsType, ProductType } from "fakestore/@types/products";
import Loading from "fakestore/components/loading";
import ProductSummary from "fakestore/components/product/productSummary";

const Produto = () => {
  const { setProductSelected, productSelected, products, setProducts } =
    useMyContext();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const idNumber = Number(id);

      if (id && !isNaN(idNumber)) {
        const data = await getProducts(idNumber);
        setProductSelected(data as ProductType);
      }
      setLoading(false);
    };

    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data as ProductsType);
    };

    fetchProduct();
    if (!products) fetchProducts();
  }, []);

  const renderResumeProduct = useMemo(() => {
    if (productSelected && products && !loading) {
      return (
        <>
          <ProductSummary />
        </>
      );
    }
    return <Loading />;
  }, [productSelected, products]);

  return <Layout>{renderResumeProduct}</Layout>;
};

export default Produto;
