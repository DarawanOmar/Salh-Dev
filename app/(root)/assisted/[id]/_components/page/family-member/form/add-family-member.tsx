"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormLabel } from "@/components/ui/form";
import { DialogClose } from "@/components/ui/dialog";
import { useTransition } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingSpinner from "@/components/reusable/loadingSpinner";
import { TextField } from "@/components/reusable/input-form-reusable";
import {
  AddFamilyMember,
  AddFamilyMemberType,
} from "@/app/(root)/assisted/_type";
import {
  AddFamilyMemberAction,
  updateFamilyMemberAction,
} from "@/app/(root)/assisted/_action";
import { DatePickerForm } from "@/components/reusable/date-picker-form";
import { SelectFormField } from "@/components/reusable/reusable-select";

type Props = {
  isEdit?: boolean;
  info?: AddFamilyMemberType;
  handleClose?: () => void;
  id?: string;
};

export default function AddFamilyMemberForm({
  isEdit,
  info,
  handleClose,
  id,
}: Props) {
  const params = useParams();
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<AddFamilyMemberType>({
    resolver: zodResolver(AddFamilyMember),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: AddFamilyMemberType) {
    values.headMemberId = params.id as string;
    setPendding(async () => {
      const result = isEdit
        ? await updateFamilyMemberAction(id as string, values)
        : await AddFamilyMemberAction(values);
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
            name="fullName"
            label="ناوی تەواو"
            placeholder="ناوی تەواو"
          />
          <DatePickerForm
            className="w-full"
            control={form.control}
            name="dateOfBirth"
            label="بەرواری لەدایکبوون"
          />

          <SelectFormField
            control={form.control}
            name="gender"
            placeholder="جۆری ڕەگەز هەڵبژێرە"
            label={"ڕەگەز"}
            options={genderType}
          />
          <SelectFormField
            control={form.control}
            name="isMarried"
            placeholder="باری هاوسەرگیری هەڵبژێرە"
            label={"باری هاوسەرگیری"}
            options={StatusType}
          />

          <TextField
            control={form.control}
            name="typeOfJob"
            label="جۆری کار"
            placeholder="جۆری کار"
          />
          <TextField
            control={form.control}
            name="placeOfWork"
            label="شوێنی کار"
            placeholder="شوێنی کار"
          />
          <TextField
            control={form.control}
            name="phone"
            label="ژمارەی مۆبایل"
            placeholder="ژمارەی مۆبایل"
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

const getDefaultValues = (values: Partial<AddFamilyMemberType> = {}) => {
  const defaultValues: AddFamilyMemberType = {
    fullName: "",
    dateOfBirth: new Date(),
    gender: "",
    isMarried: "false",
    phone: "",
    placeOfWork: "",
    typeOfJob: "",
    headMemberId: "",
  };

  return { ...defaultValues, ...values };
};

const genderType = [
  {
    label: "نــێـر",
    value: "Male",
  },
  {
    label: "مــێ",
    value: "Female",
  },
];
const StatusType = [
  {
    label: "بـەڵــێ",
    value: "true",
  },
  {
    label: "نــەخــێــر",
    value: "false",
  },
];
