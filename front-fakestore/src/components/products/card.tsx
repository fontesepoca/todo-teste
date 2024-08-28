import CardProps from "fakestore/@types/components/card";
import cardStyle from "fakestore/styles/components/products/card.module.css";
import Link from "next/link";

export default function Card({ image, key, price, title }: CardProps) {
  return (
    <article className={cardStyle["product_card"]} key={key}>
      <Link href={`/product?id=${key}`}>
        <header>
          <h2>{title}</h2>
        </header>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <section>
          <p>{`$${price}`}</p>
        </section>
      </Link>
    </article>
  );
}
