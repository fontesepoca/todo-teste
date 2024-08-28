import LayoutProps from "fakestore/@types/components/layout";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="fakestore_layout">
      <p>Layout</p>
      {children}
    </div>
  );
}
