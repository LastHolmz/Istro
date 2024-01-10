import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

export default async function User() {
  const user = await currentUser();

  if (!user)
    return (
      <div>
        Not logged in
        <Button variant={"link"}>
          <Link href={"/sing-up"}>
            Sign Up
          </Link>
        </Button>
        {" | "}
        <Button variant={"link"}>
          <Link href={"/sing-in"}>
            Sign In
          </Link>
        </Button>
      </div>
    );

  return <div>Hello {user?.username}</div>;
}
