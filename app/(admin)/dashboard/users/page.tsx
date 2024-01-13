import { getAllUsers } from "@/lib/user";
import { TableDemo } from "../components/Table";
import Search from "./components/Search";
// import dynamic from "next/dynamic";
// export dynamic = 
export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query ?? ''
  const users = await getAllUsers(query);
  return (
    <div>
      <Search placeholder="Look For User" />
      <TableDemo users={users} />
    </div>
  );
}
