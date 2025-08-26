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
import { addUser, addUserType } from "../../_type";
import { addUserAction, updateUserAction } from "../../_client-action";
import { SelectFormField } from "@/components/reusable/reusable-select";
import { useGetRole } from "@/hooks/use-fetch-queries";
import {
  FileInput,
  FileSvgDraw,
  FileUploader,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { sizeImage } from "@/lib/globals";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

type filmFormProps = {
  isEdit?: boolean;
  info?: addUserType;
  handleClose?: () => void;
  id?: string;
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

  const { data: roles, isLoading, isError } = useGetRole();

  function onSubmit(values: addUserType) {
    setPendding(async () => {
      const result = isEdit
        ? await updateUserAction(id as string, values)
        : await addUserAction(values);
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
            name="phone"
            label="ژمارەی مۆبایل"
            placeholder="ژمارەی مۆبایل"
          />
          <SelectFormField
            control={form.control}
            name="roleId"
            placeholder="ڕۆڵ هەڵبژێرە"
            label={"ڕۆڵ"}
            isError={isError}
            isLoading={isLoading}
            options={
              roles?.data?.data?.map((item) => {
                return {
                  label: item.name,
                  value: item.id,
                };
              }) || []
            }
          />
          <TextField
            control={form.control}
            name="address"
            label="ناونیشان"
            placeholder="ناونیشان"
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
          {/* <TabFormFeild
            control={form.control}
            name="status"
            label={"دۆخ"}
            defaultValue="true"
            options={[
              { value: "true", label: "چــالاک" },
              { value: "false", label: "نــاچـــالاک" },
            ]}
          /> */}
          <div className="sm:col-span-2 ">
            <FormField
              control={form.control}
              name="imageUrl"
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
    phone: "",
    roleId: "",
    note: "",
    imageUrl: null,
  };

  return { ...defaultValues, ...values };
};
