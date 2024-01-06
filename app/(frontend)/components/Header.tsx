"use client";
import Image from "next/image";
import { NavigationMenuDemo } from "./NavigationMenu";

// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="container">
      <Image
        loading={"lazy"}
        src={"/imgs/logo.png"}
        alt="logo"
        width={100}
        height={48}
      />
      <NavigationMenuDemo />
    </header>
  );
};

export default Header;
