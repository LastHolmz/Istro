import { getAllProducts, getProductById } from "@/prisma/product";
import type { Metadata } from "next";
type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  price: number | null;
  basicPrice: number | null;
  author: string;
  mainImage: string;
  description: string;
  title: string;
};
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
  const products: Product[] = await getAllProducts();
  return products.map((product: Product) => ({ id: product.id }));
}
