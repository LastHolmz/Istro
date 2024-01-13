import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { getAllUsers } from "@/lib/user";

export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;

  const users = await getAllUsers(query);

  return (
    <>
  <div>
    dashboard
  </div>
   
    </>
  );
}
