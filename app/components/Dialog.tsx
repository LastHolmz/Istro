"use client";
import {
  Dialog as DialogShadeCn,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  children?: React.ReactNode;
  Footer?: React.ReactNode;
  trigger?: React.ReactNode;
}

export function Dialog({ children, trigger, Footer }: Props) {
  return (
    <DialogShadeCn>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User Info</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
      <DialogFooter>{Footer}</DialogFooter>
    </DialogShadeCn>
  );
}
