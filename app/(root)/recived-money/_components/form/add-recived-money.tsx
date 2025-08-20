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
import { addRecivedMoneyAction, updateRecivedMoneyAction } from "../../_action";
import { addRecivedMoney, addRecivedMoneyType } from "../../_type";
import { typeOfCurrency } from "@/app/(root)/assisted/[id]/_components/page/owning/form/add-owning";
import { SelectFormField } from "@/components/reusable/reusable-select";
import {
  useGetCashSafe,
  useGetCharitable,
  useGetUsers,
} from "@/hooks/use-fetch-queries";

type Props = {
  isEdit?: boolean;
  info?: addRecivedMoneyType;
  handleClose?: () => void;
  id?: string;
};

export default function AddRecivedMoneyForm({
  isEdit,
  info,
  handleClose,
  id,
}: Props) {
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<addRecivedMoneyType>({
    resolver: zodResolver(addRecivedMoney),
    defaultValues: getDefaultValues(info),
  });
  const { data: charitable, isLoading, isError } = useGetCharitable();
  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useGetUsers();
  const {
    data: cashSafe,
    isLoading: cashSafeLoading,
    isError: cashSafeError,
  } = useGetCashSafe();
  function onSubmit(values: addRecivedMoneyType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateRecivedMoneyAction(id as string, values)
        : await addRecivedMoneyAction(values);
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
            name="charitableId"
            placeholder="خــێـــرخــواز هەڵبژێرە"
            label={"خــێـــرخــواز"}
            isError={isError}
            isLoading={isLoading}
            options={
              charitable?.data?.data?.map((item) => {
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
            type="number"
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
              users?.data?.data?.map((item) => {
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
                  label: item.name,
                  value: item.id,
                };
              }) || []
            }
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

const getDefaultValues = (values: Partial<addRecivedMoneyType> = {}) => {
  const defaultValues: addRecivedMoneyType = {
    amount: 0,
    charitableId: "",
    currencyType: "",
    note: "",
    userId: "",
    safeId: "",
  };

  return { ...defaultValues, ...values };
};
