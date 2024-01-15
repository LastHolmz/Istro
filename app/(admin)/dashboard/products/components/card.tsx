import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CardProduct } from "../layout";
import Link from "next/link";

const ProductCard = ({ props }: { props: CardProduct }) => {
  // const ProductCard = () => {
  return (
    <Card>
      <Link href={`/dashboard/products/${props.id}`}>
        <CardContent className="flex aspect-square items-center justify-between flex-col p-6">
          <div className=" w-full h-full translate-1">
            <Image
              className="w-[100%]"
              src={props.mainImage}
              alt={props.title}
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>
          <div>
            <h3>{props.title}</h3>
            <p className=" text-sm">{props.description}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
