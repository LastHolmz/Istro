import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Dashboard | Prdocuts"
}

export type CardProduct = {
  id: string;
  title: string;
  mainImage: string;
  price: number | null;
  basicPrice: number | null;
  author: string;
  description: string;
};

type Props = {
    children: React.ReactNode
}
const layout = ({children}: Props) => {
  return (
    <section>
        {children}
    </section>
  )
}

export default layout