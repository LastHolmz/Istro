import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Dashboard | Ali Express Prdocuts"
}
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