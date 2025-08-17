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
import { addUser, addUserType } from "../../_type";
import { addUserAction, updateUserAction } from "../../_action";
import { SelectFormField } from "@/components/reusable/reusable-select";
import { TabFormFeild } from "@/components/reusable/tab-form-feild";

type filmFormProps = {
  isEdit?: boolean;
  info?: addUserType;
  handleClose?: () => void;
  id?: number | string;
};

export default function AddUser({
  isEdit,
  info,
  handleClose,
  id,
}: filmFormProps) {
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<addUserType>({
    resolver: zodResolver(addUser),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: addUserType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateUserAction(id as string, values)
        : await addUserAction(values);
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
            name="email"
            label="ئیمەیڵ"
            placeholder="ئیمەیڵ"
            type="email"
          />
          <TextField
            control={form.control}
            name="fullName"
            label="ناوی تەواو"
            placeholder="ناوی تەواو"
          />
          <TextField
            control={form.control}
            name="name"
            label="ناوی بەکارهێنەر"
            placeholder="ناوی بەکارهێنەر"
          />

          <TextField
            control={form.control}
            name="password"
            label="پاسۆرد"
            placeholder="پاسۆرد"
            type="password"
          />
          <TextField
            control={form.control}
            name="note"
            label="سەرنج"
            placeholder="سەرنج"
          />
          <TabFormFeild
            control={form.control}
            name="status"
            label={"دۆخ"}
            defaultValue="active"
            options={[
              { value: "active", label: "چــالاک" },
              { value: "deactive", label: "نــاچـــالاک" },
            ]}
          />
          <SelectFormField
            control={form.control}
            name="roleId"
            placeholder=""
            label={"ڕۆڵ"}
            isError={false}
            isLoading={false}
            options={
              //   roles?.data?.map((item) => {
              //     return {
              //       label: item.name,
              //       value: item.id.toString(),
              //     };
              //   }) || []
              []
            }
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

const getDefaultValues = (values: Partial<addUserType> = {}) => {
  const defaultValues: addUserType = {
    name: "",
    email: "",
    password: "",
    address: "",
    fullName: "",
    note: "",
    phone: "",
    roleId: "",
  };

  return { ...defaultValues, ...values };
};
