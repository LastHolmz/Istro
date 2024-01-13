"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteUser } from "@/lib/user";
import { useFormState } from "react-dom";
import { TrashIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

interface Props {
  id: string;
  username: string;
}

const initialState = {
  message: "",
};
function DeleteUser({ id, username }: Props) {
  const [state, useFormAction] = useFormState(deleteUser, initialState);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className=" bg-red-500 hover:bg-red-400">
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form action={useFormAction}>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{" "}
              <b>{username}</b> account and remove this data from the servers.
              <Input type={"hidden"} name="id" value={id} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              type={"submit"}
              onClick={() =>
                toast(state.message, {
                  description: new Date().toString(),
                })
              }
            >
              Continue{" "}
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteUser;
