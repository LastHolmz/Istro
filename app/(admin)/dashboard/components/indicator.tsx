"use client";

import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon } from "@radix-ui/react-icons";


const Indicator = () => {
  const  pathname  = usePathname();

  // Split the pathname into segments
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav>
      <ul className=" flex text-sm items-center gap-2">
        <li>
          <Link href="/">
            <HomeIcon/>
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index}>
            <Link
              className={cn(
                "text-white",
                pathname === `/${pathSegments.slice(0, index + 1).join("/")}`
                  ? "text-rose-900 dark:text-rose-600"
                  : "dark:text-white text-black"
              )}
              href={`/${pathSegments.slice(0, index + 1).join("/")}`}
            >
              {"/"} {segment}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Indicator;
