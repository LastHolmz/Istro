import Image from "next/image";
import NavigationMenuDemo from "./NavigationMenu";
import ModeToggle from "@/app/components/ModeToggle";
import User from "./User";
import React from "react";

const Header = async () => {
  return (
    <header className="container flex items-center justify-between">
      <Image
        loading={"lazy"}
        src={"/imgs/logo.png"}
        alt="logo"
        width={100}
        height={48}
      />
      <NavigationMenuDemo />
      <div className="flex-center">
        <React.Suspense fallback={<div>Loading ..</div>}>
          <User />
        </React.Suspense>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
