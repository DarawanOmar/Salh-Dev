"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/reusable/loadingSpinner";
import { TextField } from "@/components/reusable/input-form-reusable";
import { addRoleAction, updateRoleAction } from "../../_action";
import { addRole, addRoleType } from "../../_type";

type Props = {
  isEdit?: boolean;
  info?: addRoleType;
  handleClose?: () => void;
  id?: string;
};

export default function AddRoleForm({ isEdit, info, handleClose, id }: Props) {
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<addRoleType>({
    resolver: zodResolver(addRole),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: addRoleType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateRoleAction(id as string, values)
        : await addRoleAction(values);
      if (result.success) {
        toast.success(result.message);
        handleClose && handleClose();
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <TextField
            control={form.control}
            name="name"
            label="ناوی دەسەڵات"
            placeholder="ناوی دەسەڵات"
          />
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <Button className="py-5" type="submit" disabled={pendding}>
            {pendding ? <LoadingSpinner /> : isEdit ? "گۆرانکاری" : "تۆمارکردن"}
          </Button>
          <DialogClose asChild>
            <Button className="py-5" type="button">
              ڕەتکردنەوە
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}

const getDefaultValues = (values: Partial<addRoleType> = {}) => {
  const defaultValues: addRoleType = {
    name: "",
  };

  return { ...defaultValues, ...values };
};
