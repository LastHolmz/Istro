import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Links from "./components/Links";
import { SheetDemo } from "./components/Sheet";
import Indicator from "./components/indicator";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Estro",
  description: "The Best Store Ever & Best Deals & Free Ships",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-2">
      {/* Include shared UI here e.g. a header or sidebar */}
      <header className="flex-between">
        <Links />
        <SheetDemo />
        <Indicator />
      </header>
      <div className=" px-2 sm:px-4 md:px-8 lg:px-16">
      {/* <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl p-1"> */}
        {children}
      </div>
    </section>
  );
}
