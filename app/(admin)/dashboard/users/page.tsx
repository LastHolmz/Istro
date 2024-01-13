import { getAllUsers } from "@/lib/user";
import { TableDemo } from "../components/Table";
import Search from "./components/Search";

export const revalidate = 0;

export default async function UsersPage({
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
