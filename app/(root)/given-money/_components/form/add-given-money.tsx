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
import { addGivenAction, updateGivenAction } from "../../_action";
import { addGiven, addGivenType } from "../../_type";
import { typeOfCurrency } from "@/app/(root)/assisted/[id]/_components/page/owning/form/add-owning";
import { SelectFormField } from "@/components/reusable/reusable-select";
import { DatePickerForm } from "@/components/reusable/date-picker-form";
import { useGetDataForm } from "../_hook/use-get-data-form";

type Props = {
  isEdit?: boolean;
  info?: addGivenType;
  handleClose?: () => void;
  id?: string;
};

export default function AddGivenForm({ isEdit, info, handleClose, id }: Props) {
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  console.log("Info", info);
  const form = useForm<addGivenType>({
    resolver: zodResolver(addGiven),
    defaultValues: getDefaultValues(info),
  });

  const {
    cashSafe,
    cashSafeError,
    cashSafeLoading,
    headMembers,
    isError,
    isLoading,
    users,
    usersError,
    usersLoading,
  } = useGetDataForm();

  function onSubmit(values: addGivenType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateGivenAction(id as string, values)
        : await addGivenAction(values);
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
          <SelectFormField
            control={form.control}
            name="headMemberId"
            placeholder="خــێـــرخــواز هەڵبژێرە"
            label={"خــێـــرخــواز"}
            isError={isError}
            isLoading={isLoading}
            options={
              headMembers?.data?.data?.map((item) => {
                return {
                  label: item.fullName,
                  value: item.id,
                };
              }) || []
            }
          />
          <SelectFormField
            control={form.control}
            name="safeId"
            placeholder="قــاســە هەڵبژێرە"
            label={"قــاســە"}
            isError={cashSafeError}
            isLoading={cashSafeLoading}
            options={
              cashSafe?.data?.map((item) => {
                return {
                  label:
                    item.name === "Main Safe"
                      ? "قــاســـەی ســـەرەکــی"
                      : "قــاســـەی لاوەکـــی",
                  value: item.id,
                };
              }) || []
            }
          />
          <SelectFormField
            control={form.control}
            name="userId"
            placeholder="بەکــارهێنەر هەڵبژێرە"
            label={"بەکــارهێنەر"}
            isError={usersError}
            isLoading={usersLoading}
            options={
              users?.data?.data?.map((item) => {
                return {
                  label: item.fullName,
                  value: item.id,
                };
              }) || []
            }
          />
          <TextField
            control={form.control}
            name="amount"
            label="بڕی پـــارە"
            placeholder="بڕی پـــارە"
            type="number"
          />
          <SelectFormField
            control={form.control}
            name="currencyType"
            placeholder="جۆری پارە هەڵبژێرە"
            label={"پارە"}
            options={typeOfCurrency}
          />
          <DatePickerForm
            control={form.control}
            name="givenAt"
            label="بەرواری پارەدان"
            className="w-full"
          />

          <TextField
            control={form.control}
            name="transactionType"
            label="جۆری خەرجی"
            placeholder="جۆری خەرجی"
          />
          <TextField
            control={form.control}
            name="note"
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

const getDefaultValues = (values: Partial<addGivenType> = {}) => {
  const defaultValues: addGivenType = {
    headMemberId: "",
    userId: "",
    safeId: "",

    amount: 0,
    currencyType: "",
    transactionType: "",
    note: "",
    givenAt: new Date(),
  };

  return { ...defaultValues, ...values };
};
