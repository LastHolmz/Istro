import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

export default async function User() {
  const user = await currentUser();

  if (!user)
    return (
      <div>
        <Button variant={"link"}>
          <Link href={"/sing-up"}>Sign Up</Link>
        </Button>
        {" | "}
        <Button variant={"link"}>
          <Link href={"/sing-in"}>Sign In</Link>
        </Button>
      </div>
    );

  return (
    <div>
      {user?.username}{" "}
      <SignOutButton>
        <Button variant={"outline"}>sign out</Button>
      </SignOutButton>{" "}
    </div>
  );
}
