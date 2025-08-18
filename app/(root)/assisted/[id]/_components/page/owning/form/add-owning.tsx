"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormLabel } from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/reusable/loadingSpinner";
import { TextField } from "@/components/reusable/input-form-reusable";

import { AddOwning, AddOwningType } from "@/app/(root)/assisted/_type";
import {
  AddFamilyMemberAction,
  AddOwningAction,
  updateFamilyMemberAction,
  updateOwningAction,
} from "@/app/(root)/assisted/_action";
import { DatePickerForm } from "@/components/reusable/date-picker-form";
import { SelectFormField } from "@/components/reusable/reusable-select";

type Props = {
  isEdit?: boolean;
  info?: AddOwningType;
  handleClose?: () => void;
  id?: string;
};

export default function AddOwningForm({
  isEdit,
  info,
  handleClose,
  id,
}: Props) {
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<AddOwningType>({
    resolver: zodResolver(AddOwning),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: AddOwningType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateOwningAction(id as string, values)
        : await AddOwningAction(values);
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
            name="typeOfOwning"
            label="خاوەنی چییە"
            placeholder="خاوەنی چییە"
          />
          <TextField
            control={form.control}
            name="price"
            label="نرخ"
            placeholder="نرخ"
          />

          <SelectFormField
            control={form.control}
            name="typeOfCurrency"
            placeholder="جۆری پارە هەڵبژێرە"
            label={"پارە"}
            options={typeOfCurrency}
          />

          <TextField
            control={form.control}
            name="description"
            label="وەسف"
            placeholder="وەسف"
          />
          <TextField
            control={form.control}
            name="note"
            label="تێبینی"
            placeholder="تێبینی"
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

const getDefaultValues = (values: Partial<AddOwningType> = {}) => {
  const defaultValues: AddOwningType = {
    description: "",
    headMemberId: "",
    note: "",
    price: "",
    typeOfCurrency: "",
    typeOfOwning: "",
  };

  return { ...defaultValues, ...values };
};

const typeOfCurrency = [
  {
    label: "دیناری عێراقی",
    value: "IQD",
  },
  {
    label: "دۆلاری ئەمریکی",
    value: "USD",
  },
];
