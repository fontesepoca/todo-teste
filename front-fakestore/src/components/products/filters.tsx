import useMyContext from "fakestore/context/useMyContext";
import filtersStyle from "fakestore/styles/components/products/filters.module.css";

export default function Filters() {
  const { categories } = useMyContext();

  return (
    <section className={filtersStyle[".fakestore_filters"]}>
      <input type="text" />
      <select>
        {categories?.map((categorie) => {
          return <option value={categorie}>{categorie}</option>;
        })}
      </select>
      <select className="fakestore_filters_order">
        <option value="price asc">Lower price</option>
        <option value="price desc">Higher price</option>
        <option value="name asc">A ~ Z</option>
        <option value="name desc">Z ~ A</option>
      </select>
    </section>
  );
}
