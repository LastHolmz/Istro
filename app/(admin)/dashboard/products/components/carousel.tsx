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

export function CarouselDemo({ array }: { array: CardProduct[] }) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {array?.map((prop, index) => (
          /*  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/2"> */
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
  );
}
