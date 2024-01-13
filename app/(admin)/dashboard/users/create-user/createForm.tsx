"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createNewUser } from "@/lib/user";
import { toast } from "sonner";

const initialState = {
  message: "",
};

const CreateUserForm = () => {
  const [state, useFormAction] = useFormState(createNewUser, initialState);

  return (
    <div>
      <h1 className={" font-bold"}>Create New User</h1>
      <form
        action={useFormAction}
        className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 mt-4"
      >
        {" "}
        <div className="">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            min={8}
            id="username"
            type={"text"}
            name="username"
            defaultValue={"username"}
            className="col-span-3"
          />
          <Input type={"hidden"} name="id" value={"id"} />
        </div>
        <div className="">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            min={4}
            id="email"
            type={"email"}
            name="email"
            defaultValue={"email"}
            className="col-span-3"
          />
          <Input type={"hidden"} name="id" value={"id"} />
        </div>
        <div className="">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            // pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z\d@#$%^&+=]{8,}"
            min={8}
            id="password"
            type={"password"}
            name="password"
            defaultValue={"password"}
            className="col-span-3"
          />
          <Input type={"hidden"} name="id" value={"id"} />
        </div>
        <div>
          <Label htmlFor="role" className="text-right">
            Role
          </Label>
          <Select name="role" defaultValue="moderator">
            <SelectTrigger id="role" className="w-[180px]">
              <SelectValue placeholder="User Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moderator">Normal</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          type={"submit"}
          variant="outline"
          onClick={() =>
            toast(state.message, {
              description: new Date().toLocaleDateString(),
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default CreateUserForm;
