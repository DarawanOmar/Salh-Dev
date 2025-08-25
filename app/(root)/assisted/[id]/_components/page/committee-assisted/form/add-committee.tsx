"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { useTransition } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingSpinner from "@/components/reusable/loadingSpinner";
import {
  AddCommitteeAssistedAction,
  updateCommitteeAssistedAction,
} from "@/app/(root)/assisted/_action";
import {
  AddCommitteeAssisted,
  AddCommitteeAssistedType,
} from "@/app/(root)/assisted/_type";
import { TextField } from "@/components/reusable/input-form-reusable";

type filmFormProps = {
  isEdit?: boolean;
  info?: AddCommitteeAssistedType;
  handleClose?: () => void;
  id?: string;
};

export default function AddCommitteeAssistedForm({
  isEdit,
  info,
  handleClose,
  id,
}: filmFormProps) {
  const params = useParams();
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<AddCommitteeAssistedType>({
    resolver: zodResolver(AddCommitteeAssisted),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: AddCommitteeAssistedType) {
    values.headMemberId = params.id as string;
    setPendding(async () => {
      const result = isEdit
        ? await updateCommitteeAssistedAction(id as string, values)
        : await AddCommitteeAssistedAction(values);
      if (result.success) {
        toast.success(
          isEdit ? "بە سەرکەوتووی گۆرانکاری کرا" : "بە سەرکەوتووی دروستکرا"
        );
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
            label="ناوی لــیــژنە"
          />
          <TextField
            control={form.control}
            name="phone"
            label="ژمارەی مۆبایل"
          />
          <TextField control={form.control} name="address" label="ناونیشان" />

          <TextField control={form.control} name="note" label="سەرنج" />
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
const getDefaultValues = (values: Partial<AddCommitteeAssistedType> = {}) => {
  const defaultValues: AddCommitteeAssistedType = {
    name: "",
    address: "",
    note: "",
    phone: "",
    headMemberId: "",
  };

  return { ...defaultValues, ...values };
};
