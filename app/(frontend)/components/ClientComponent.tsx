"use client"

type Props = {
    children : React.ReactNode
}

const ClientComponent = ({children}: Props) => {
  return (
    <>
    {children}
    </>
  )
}

export default ClientComponent