import { getAllProducts } from "@/prisma/product";
import { CarouselDemo } from "./components/carousel";
export const revalidate = 0;
export const dynamic = "force-dynamic";
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
      <CarouselDemo array={products} />
    </div>
  );
}
