"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateUserForm = () => {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          username
        </Label>
        <Input
          min={4}
          id="name"
          type={"text"}
          name="username"
          defaultValue={"username"}
          className="col-span-3"
        />
        <Input type={"hidden"} name="id" value={"id"} />
      </div>
      <Select name="role" defaultValue="moderator">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="User Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="moderator">Normal</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CreateUserForm;
