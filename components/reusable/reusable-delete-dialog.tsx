"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import CustomDialog, { PropsCustomDialog } from "./resusable-dialog";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { StopCircle, TrashIcon } from "lucide-react";
import LoadingSpinner from "./loadingSpinner";

type DialogModalProps = {
  id: string;
  actionDelete: (
    id: string,
    options?: any
  ) => Promise<{ message: string; success: boolean }>;
  classButton?: string;
  title?: string;
  isDeActive?: boolean;
} & PropsCustomDialog;

function ReusableDeleteDailog({
  actionDelete,
  id,
  classButton,
  title = "دڵنیای لە سڕینەوەی فیلم!",
  isDeActive,
  ...props
}: DialogModalProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [pending, setPending] = React.useTransition();
  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setPending(async () => {
      e.preventDefault();
      const res = await actionDelete(id);
      if (res.success) {
        toast.success(res.message);
        handleClose();
        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };
  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      {...props}
      classContent="max-w-[433px] h-[293px] sm:rounded-xl p-0"
      title=""
    >
      <div className="flex flex-col  justify-center items-center">
        {/* Trash Icon */}
        <div className="relative w-[70px] h-[70px] ">
          {/* Blue background with blur effect */}
          <div className="w-full h-full rounded-full bg-primary blur-md"></div>
          {/* Centered Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {isDeActive ? (
              <StopCircle className="text-white" />
            ) : (
              <TrashIcon className="text-white" />
            )}
          </div>
        </div>

        {/*  Title*/}
        <div className="text-xl my-8 font-sirwan_meduim ">{title}</div>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 px-6 ">
        <Button className="py-5 text-lg" type="submit">
          {pending ? <LoadingSpinner /> : "بەڵێ"}
        </Button>
        <DialogClose asChild>
          <Button className="py-5 text-lg">نەخێر</Button>
        </DialogClose>
      </form>
    </CustomDialog>
  );
}

export default ReusableDeleteDailog;
