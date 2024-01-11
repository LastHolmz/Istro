import { getAllUsers } from "@/lib/user";
import { TableDemo } from "../components/Table";
import Search from "./components/Search";

export default async function page({ query }: { query: string }) {
  const users = await getAllUsers(query);
  return (
    <div>
      <Search placeholder="Look For User" />
      <TableDemo users={users} />
    </div>
  );
}
