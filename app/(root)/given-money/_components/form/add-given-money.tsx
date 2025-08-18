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
import {
  useGetCharitable,
  useGetHeadMember,
  useGetUsers,
} from "@/hooks/use-fetch-queries";

type Props = {
  isEdit?: boolean;
  info?: addGivenType;
  handleClose?: () => void;
  id?: string;
};

export default function AddGivenForm({ isEdit, info, handleClose, id }: Props) {
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<addGivenType>({
    resolver: zodResolver(addGiven),
    defaultValues: getDefaultValues(info),
  });
  const { data: headMembers, isLoading, isError } = useGetHeadMember();
  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useGetUsers();
  function onSubmit(values: addGivenType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateGivenAction(id as string, values)
        : await addGivenAction(values);
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
          <SelectFormField
            control={form.control}
            name="headMemberId"
            placeholder="خــێـــرخــواز هەڵبژێرە"
            label={"خــێـــرخــواز"}
            isError={isError}
            isLoading={isLoading}
            options={
              headMembers?.data?.map((item) => {
                return {
                  label: item.name,
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
          />
          <SelectFormField
            control={form.control}
            name="currencyType"
            placeholder="جۆری پارە هەڵبژێرە"
            label={"پارە"}
            options={typeOfCurrency}
          />
          <SelectFormField
            control={form.control}
            name="userId"
            placeholder="بەکــارهێنەر هەڵبژێرە"
            label={"بەکــارهێنەر"}
            isError={usersError}
            isLoading={usersLoading}
            options={
              users?.data?.map((item) => {
                return {
                  label: item.fullName,
                  value: item.id,
                };
              }) || []
            }
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
    amount: "",
    headMemberId: "",
    currencyType: "",
    transactionType: "",
    note: "",
    userId: "",
    safeId: "",
  };

  return { ...defaultValues, ...values };
};
