import useMyContext from "fakestore/context/useMyContext";
import filtersStyle from "fakestore/styles/components/products/filters.module.css";
import { filtersProps, OrderTypes } from "fakestore/@types/components/filters";

export default function Filters({
  valueProductName,
  setValueProductName,
  valueCategorie,
  setCategorie,
  valueOrder,
  setOrder,
}: filtersProps) {
  const { categories } = useMyContext();

  return (
    <section className={filtersStyle[".fakestore_filters"]}>
      <input
        type="text"
        name="input-products-name"
        className="fakestore_filters_name"
        onChange={({ target: { value } }) => setValueProductName(value)}
        value={valueProductName}
      />
      <select
        onChange={({ target: { value } }) => setCategorie(value)}
        value={valueCategorie}
        name="input-products-categorie"
        className="fakestore_filters_categorie"
      >
        <option value="" disabled selected hidden>Select a category</option>
        {categories?.map((categorie) => {
          return <option value={categorie}>{categorie}</option>;
        })}
      </select>
      <select
        className="fakestore_filters_order"
        onChange={({ target: { value } }) => setOrder(value as OrderTypes)}
        value={valueOrder}
      >
        <option value="" disabled selected hidden>Select a filter</option>
        <option value="name asc">A ~ Z</option>
        <option value="name desc">Z ~ A</option>
        <option value="price asc">Lower price</option>
        <option value="price desc">Higher price</option>
      </select>
    </section>
  );
}
