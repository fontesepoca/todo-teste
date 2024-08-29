import defaultStyle from "fakestore/styles/components/default-product.module.css";

export default function DefaultProduct() {
  return (
    <section className={defaultStyle["fakestore_default_product"]}>
      <h2>Nenhum produto encontrado!</h2>
    </section>
  );
}
