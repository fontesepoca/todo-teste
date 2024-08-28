import headerStyles from "fakestore/styles/components/header.module.css";
import ShoppingCart from "fakestore/images/shoppingCart.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className={headerStyles["fakestore_header"]}>
      <Link href="/produtos">
        <h1>Fake Store</h1>
        <ShoppingCart width={50} />
      </Link>
    </header>
  );
}
