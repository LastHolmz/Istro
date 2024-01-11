import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@clerk/nextjs/server";

export function TableDemo({users}: {users: Partial<User[]>}) {
  
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Username</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">CreatedAt</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user?.id}>
            <TableCell className="text-right">{user?.username}</TableCell>
            <TableCell className="font-medium">{user?.id}</TableCell>
            <TableCell>{user?.emailAddresses[0].emailAddress ?? ""}</TableCell>
            <TableCell>{user?.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{users?.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
