// "use client";
import Image from "next/image";
import NavigationMenuDemo from "./NavigationMenu";
import  ModeToggle  from "@/app/components/ModeToggle";
import User from "./User";
import React from "react";


const Header = async () => {
  
  // const user = await getCurrentUser()
  // console.log(user)


  return (
    <header className="container">
      <Image
        loading={"lazy"}
        src={"/imgs/logo.png"}
        alt="logo"
        width={100}
        height={48}
        />
        <React.Suspense fallback={<div>Loading ..</div>}>

        <User/>
        </React.Suspense>
      {/* <ClientComponent> */}
      <ModeToggle />
      <NavigationMenuDemo />
      {/* </ClientComponent> */}
    </header>
  );
};

export default Header;
