import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function SheetDemo() {
  return (
    <div className=" block sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"}>Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Estro Dashboard</SheetTitle>
            <SheetDescription className=" flex items-center flex-col">
              <SheetClose asChild>
                <Link className="" href={"/dashboard"}>
                  Dashboard
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/dashboard/users"}>Users</Link>
              </SheetClose>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
