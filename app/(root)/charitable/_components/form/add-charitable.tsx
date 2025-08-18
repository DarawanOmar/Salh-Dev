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
import { addCharitable, addCharitableType } from "../../_type";
import { addCharitableAction, updateCharitableAction } from "../../_action";

type Props = {
  isEdit?: boolean;
  info?: addCharitableType;
  handleClose?: () => void;
  id?: string;
};

export default function AddCharitableForm({
  isEdit,
  info,
  handleClose,
  id,
}: Props) {
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<addCharitableType>({
    resolver: zodResolver(addCharitable),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: addCharitableType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateCharitableAction(id as string, values)
        : await addCharitableAction(values);
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
            name="fullName"
            label="ناوی تەواو"
            placeholder="ناوی تەواو"
          />
          <TextField
            control={form.control}
            name="phone"
            label="ژمارەی مۆبایل"
            placeholder="ژمارەی مۆبایل"
          />
          <TextField
            control={form.control}
            name="address"
            label="ناونیشان"
            placeholder="ناونیشان"
          />

          <TextField
            control={form.control}
            name="description"
            label="سەرنج"
            placeholder="سەرنج"
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

const getDefaultValues = (values: Partial<addCharitableType> = {}) => {
  const defaultValues: addCharitableType = {
    fullName: "",
    address: "",
    description: "",
    phone: "",
  };

  return { ...defaultValues, ...values };
};
