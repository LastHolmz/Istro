import Header from "./components/Header";
import "../globals.css";
export default function UiLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      <main>{children}</main>
    </section>
  );
}
