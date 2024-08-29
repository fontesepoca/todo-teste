import useMyContext from "fakestore/context/useMyContext";
import formatePrice from "fakestore/utils/formatePrice";
import productSummaryStyles from "fakestore/styles/components/product/product-resume.module.css";

export default function ProductSummary() {
  const { productSelected } = useMyContext();

  return (
    <article className={productSummaryStyles["fakestore_product_resume"]}>
      <figure>
        <img src={productSelected?.image} alt={productSelected?.title} />
      </figure>
      <div>
        <h2>{productSelected?.title}</h2>
        <p>{`Description: ${productSelected?.description}`}</p>
        <p>{`Price: ${formatePrice(productSelected?.price as number)}`}</p>
        <p>{`Rate: ${productSelected?.rating.rate}`}</p>
        <p>{`Category: ${productSelected?.category}`}</p>
      </div>
    </article>
  );
}
