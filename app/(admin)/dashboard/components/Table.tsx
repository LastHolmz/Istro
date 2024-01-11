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
import { DialogDemo } from "./Dialog";
export function TableDemo({ users }: { users: Partial<User[]> }) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Username</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>has password</TableHead>
          <TableHead>id</TableHead>
          <TableHead>actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user?.id}>
            <TableCell>{user?.username}</TableCell>
            <TableCell className="font-medium text-green-500">
              {user?.publicMetadata.role as string}
            </TableCell>
            <TableCell>{user?.emailAddresses[0].emailAddress ?? ""}</TableCell>
            <TableCell>{user?.passwordEnabled ? "yes" : "no"}</TableCell>
            <TableCell>{user?.id}</TableCell>
            <TableCell>
              <DialogDemo />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">{users?.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
