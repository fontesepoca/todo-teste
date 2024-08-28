import LayoutProps from "fakestore/@types/components/layout";
import Header from "./header";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="fakestore_layout">
      <Header />
      {children}
    </div>
  );
}
