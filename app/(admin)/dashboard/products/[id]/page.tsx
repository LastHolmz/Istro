import { getAllProducts, getProductById } from "@/prisma/product";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product?.title) {
    return {
      title: "product not found",
    };
  }

  return {
    title: product?.title || "product ",
    description: product?.description,
  };
}
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  return <div>{product?.title}</div>;
};

export default ProductPage;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ id: product.id }));
}
