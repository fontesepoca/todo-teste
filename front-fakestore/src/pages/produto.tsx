import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "fakestore/components/layout";
import useMyContext from "fakestore/context/useMyContext";
import getProducts from "fakestore/repositories/getProducts";
import { ProductsType, ProductType } from "fakestore/@types/products";
import Loading from "fakestore/components/loading";
import ProductSummary from "fakestore/components/product/productSummary";
import ProductSuggestions from "fakestore/components/product/productSuggestions";

const Produto = () => {
  const { setProductSelected, productSelected, products, setProducts } =
    useMyContext();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      const idNumber = Number(id);

      if (id && !isNaN(idNumber)) {
        const data = await getProducts(idNumber);
        setProductSelected(data as ProductType);
      }
    };

    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data as ProductsType);
    };

    fetchProduct();
    if (!products) fetchProducts();
  }, [id]);

  const renderResumeProduct = useMemo(() => {
    if (productSelected && products) {
      return (
        <>
          <ProductSummary />
          <ProductSuggestions />
        </>
      );
    }
    return <Loading />;
  }, [productSelected, products]);

  return <Layout>{renderResumeProduct}</Layout>;
};

export default Produto;
