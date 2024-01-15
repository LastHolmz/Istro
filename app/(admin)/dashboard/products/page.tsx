import { getAllProducts } from "@/prisma/product";
import { CarouselDemo } from "./components/carousel";
import Link from "next/link";

export default async function AliExpressPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const products = await getAllProducts();
  return (
    <div className="">
      <Link href={"/dashboard/products/new"} >
        Add
      </Link>
      <CarouselDemo array={products} title={"Most Viewed"} />
    </div>
  );
}
