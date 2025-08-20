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
  AddImage,
  AddImageType,
} from "@/app/(root)/assisted/_type";
import {
  FileInput,
  FileSvgDraw,
  FileUploader,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { sizeImage } from "@/lib/globals";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  AddImageAssisted,
  UpdateImageAssisted,
} from "../../../../client-action";

type Props = {
  isEdit?: boolean;
  info?: AddImageType;
  handleClose?: () => void;
  id?: string;
};

export default function AddImageHouse({
  isEdit,
  info,
  handleClose,
  id,
}: Props) {
  const [pendding, setPendding] = useTransition();
  const params = useParams();
  const router = useRouter();
  const form = useForm<AddImageType>({
    resolver: zodResolver(AddImage),
    defaultValues: getDefaultValues(info),
  });

  function onSubmit(values: AddImageType) {
    values.headMemberId = params.id as string;

    setPendding(async () => {
      const result = isEdit
        ? await UpdateImageAssisted(id as string, values)
        : await AddImageAssisted(values);
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
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <>
                <FormLabel className="text-base">وێـــنـــە </FormLabel>
                <FileUploader
                  value={field.value ? [field.value] : null}
                  onValueChange={(files) => {
                    const selectedFile = files?.[0] || null;
                    field.onChange(selectedFile);
                  }}
                  dropzoneOptions={{
                    multiple: false,
                    maxFiles: 19,
                    maxSize: sizeImage,
                  }}
                  reSelect={true}
                  className="relative bg-background rounded-lg p-2 border border-primary border-dashed"
                >
                  <FileInput className="outline-hidden ">
                    <div className="flex items-center justify-center flex-col pt-3 pb-4  ">
                      {field.value && (
                        <FileUploaderItem
                          index={0}
                          aria-roledescription={`file containing ${field.value.name}`}
                          className="p-0 size-20"
                        >
                          <AspectRatio className="size-full">
                            <Image
                              src={URL.createObjectURL(field.value)}
                              alt={field.value.name}
                              className="object-cover rounded-md"
                              fill
                            />
                          </AspectRatio>
                        </FileUploaderItem>
                      )}
                      {!field.value && <FileSvgDraw />}
                    </div>
                  </FileInput>
                </FileUploader>
              </>
            )}
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

const getDefaultValues = (values: Partial<AddImageType> = {}) => {
  const defaultValues: AddImageType = {
    url: null,
    headMemberId: "",
  };

  return { ...defaultValues, ...values };
};
