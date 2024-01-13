"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Links() {
  const pathname = usePathname();

  return (
    <nav className=" hidden md:flex items-center">
      <LinkItem href="dashboard" content="Dashboard" />
      <LinkItem href="dashboard/users" content="Users" />
      <LinkItem href="dashboard/ali-express-products" content="Ali Express Products" />
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
            ? "text-rose-900 dark:text-rose-600"
            : "dark:text-white text-black"
        )}
        href={`/${href}`}
      >
        {content}
      </Link>
      <div
        className={cn(
          "h-1 w-full transition-all rounded-lg",
          pathname === `/${href}` && "bg-rose-900 dark:bg-rose-600"
        )}
      />
    </div>
  );
}
