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
import { SelectFormField } from "@/components/reusable/reusable-select";
import {
  useGetCommitteesWithoutPagination,
  useGetRole,
} from "@/hooks/use-fetch-queries";
import {
  AddCommitteeAssistedAction,
  updateCommitteeAssistedAction,
} from "@/app/(root)/assisted/_action";
import {
  AddCommitteeAssisted,
  AddCommitteeAssistedType,
} from "@/app/(root)/assisted/_type";

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
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<AddCommitteeAssistedType>({
    resolver: zodResolver(AddCommitteeAssisted),
    defaultValues: getDefaultValues(info),
  });

  const {
    data: committees,
    isLoading,
    isError,
  } = useGetCommitteesWithoutPagination();

  function onSubmit(values: AddCommitteeAssistedType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateCommitteeAssistedAction(id as string, values)
        : await AddCommitteeAssistedAction(values);
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
        <div className="grid grid-cols-1 gap-5">
          <SelectFormField
            control={form.control}
            name="committeeId"
            placeholder="لــیــژنە هەڵبژێرە"
            label={"لــیــژنە"}
            isError={isError}
            isLoading={isLoading}
            options={
              committees?.data?.map((item) => {
                return {
                  label: item.name,
                  value: item.id,
                };
              }) || []
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

const getDefaultValues = (values: Partial<AddCommitteeAssistedType> = {}) => {
  const defaultValues: AddCommitteeAssistedType = {
    committeeId: "",
    headMemberId: "",
  };

  return { ...defaultValues, ...values };
};
