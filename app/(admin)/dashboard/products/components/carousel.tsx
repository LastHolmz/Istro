import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./card";
import { CardProduct } from "../layout";
import Link from "next/link";

export function CarouselDemo({
  array,
  title,
}: {
  array: CardProduct[];
  title: string;
}) {
  const groupLink = title.split(" ").join("20%").toLocaleLowerCase();

  return (
    <div className="flex flex-col itmes-center" id={groupLink}>
      <Link
        className="text-primary w-fit underline-offset-4 hover:underline"
        href={`/dashboard/products#${groupLink}`}
      >
        #{title}
      </Link>

      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {array?.map((prop, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <ProductCard props={prop} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
