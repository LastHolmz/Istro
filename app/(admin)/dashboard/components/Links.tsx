"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Links() {
  const pathname = usePathname();

  return (
    <nav className=" hidden md:flex items-center">
      {/* <Link href={"/dashboard"} > dashboard </Link> */}
      {/* <Link href={"/dashboard/users"}> users </Link>*/}
      <LinkItem href="dashboard" content="dashboard" />
      <LinkItem href="dashboard/users" content="users" />
    </nav>
  );
}
interface LinkProps {
  href: string;
  content: string;
}
export function LinkItem({ href, content }: LinkProps) {
  const pathname = usePathname();
  return (
    <div className=" relative w-fit">
      <Link
        className={cn(
          "flex-center h-12 px-4",
          pathname === `/${href}`
            ? "text-sky-900 dark:text-sky-600"
            : "dark:text-white text-black"
        )}
        href={`/${href}`}
      >
        {content}
      </Link>
      <div
        className={cn(
          "h-1 w-full transition-all rounded-lg",
          pathname === `/${href}` && "bg-sky-900 dark:bg-sky-600"
        )}
      />
    </div>
  );
}
