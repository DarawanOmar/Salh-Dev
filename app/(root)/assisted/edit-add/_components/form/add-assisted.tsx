"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/reusable/loadingSpinner";
import { TextField } from "@/components/reusable/input-form-reusable";
import { addUAssisted, addUAssistedType } from "../../../_type";
import { AddAssistedAction, UpdateAssistedAction } from "../../../_action";
import { DatePickerForm } from "@/components/reusable/date-picker-form";
import dynamic from "next/dynamic";
import { SelectFormField } from "@/components/reusable/reusable-select";

// Dynamic import for Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import("../map"), {
  ssr: false,
  loading: () => (
    <div className="h-[32vh] w-full bg-gray-100 rounded-[20px] flex items-center justify-center">
      Loading Map...
    </div>
  ),
});
import Link from "next/link";

type Props = {
  isEdit?: boolean;
  info?: addUAssistedType;
  id?: string;
};

export default function AddAssisted({ isEdit, info, id }: Props) {
  const [pendding, setPendding] = useTransition();
  const router = useRouter();
  const form = useForm<addUAssistedType>({
    resolver: zodResolver(addUAssisted),
    defaultValues: getDefaultValues(info),
  });

  console.log("Info => ", info);

  function onSubmit(values: addUAssistedType) {
    setPendding(async () => {
      const result = isEdit
        ? await UpdateAssistedAction(id as string, values)
        : await AddAssistedAction(values);
      if (result.success) {
        toast.success(
          isEdit ? "بە سەرکەوتووی گۆرانکاری کرا" : "بە سەرکەوتووی دروستکرا"
        );
        router.push("/assisted");
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <TextField
            control={form.control}
            name="fullName"
            label="ناوی تەواو"
            placeholder="ناوی تەواو"
          />
          <TextField
            control={form.control}
            name="currentAddress"
            label="ناونیشانی ئێستا"
            placeholder="ناونیشانی ئێستا"
          />
          <DatePickerForm
            className="w-full"
            control={form.control}
            name="dateOfBirth"
            label="بەرواری لەدایکبوون"
          />
          <TextField
            control={form.control}
            name="city"
            label=" ئەو شارەی لێدەژی "
            placeholder=" ئەو شارەی لێدەژی "
          />

          <TextField
            control={form.control}
            name="note"
            label="سەرنج"
            placeholder="سەرنج"
          />
          <TextField
            control={form.control}
            name="nationality"
            label="ڕەگەزنامە"
            placeholder="ڕەگەزنامە"
          />
          <TextField
            control={form.control}
            name="placeOfBirth"
            label="شوێنی لەدایکبوون"
            placeholder="شوێنی لەدایکبوون"
          />

          <SelectFormField
            control={form.control}
            name="gender"
            placeholder="جۆری ڕەگەز هەڵبژێرە"
            label={"ڕەگەز"}
            options={typeOfGender}
          />
          <DatePickerForm
            className="w-full"
            control={form.control}
            name="dateOfRegistration"
            label="بەرواری ناو تۆمارکردن"
          />
          <TextField
            control={form.control}
            name="drugs"
            label="چی دەخوات"
            placeholder="چی دەخوات"
          />
          <TextField
            control={form.control}
            name="salary"
            label="مووچە"
            placeholder="مووچە"
          />

          <SelectFormField
            control={form.control}
            name="currencyType"
            placeholder="جۆری پارە هەڵبژێرە"
            label={"جۆری پارە"}
            options={currencyTypeValue}
          />

          <TextField
            control={form.control}
            name="currentJob"
            label="کاری ئێستا"
            placeholder="کاری ئێستا"
          />
          <DatePickerForm
            className="w-full"
            control={form.control}
            name="dateOfExpiry"
            label="بەرواری بەسەرچوون"
          />
          <SelectFormField
            control={form.control}
            name="temporary"
            placeholder="جۆری هاوکاریکراو هەڵبژێرە"
            label={"هاوکاریکراو"}
            options={typeOfTemporary}
          />
          <TextField
            control={form.control}
            name="biggestProblem"
            label="گەورەترن کێشە هەیەتی"
            placeholder="گەورەترن کێشە هەیەتی"
          />
          <TextField
            control={form.control}
            name="phoneNumber1"
            label="ژمارەی مۆبایل یەکەم"
            placeholder="ژمارەی مۆبایل یەکەم"
          />
          <TextField
            control={form.control}
            name="phoneNumber2"
            label="ژمارەی مۆبایل دووەم"
            placeholder="ژمارەی مۆبایل دووەم"
          />
          <TextField
            control={form.control}
            name="mainProblem"
            label="کێشەی سەرەکی"
            placeholder="کێشەی سەرەکی"
          />

          <div className="sm:col-span-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="bg-primary p-3 rounded-lg text-primary-foreground">
                    زیــادکــردنــی لەســەر نــەخــشــە
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Map
                    lant={form.watch("latitude")}
                    long={form.watch("longitude")}
                    setFormValues={(lat, lng) => {
                      form.setValue("latitude", lat);
                      form.setValue("longitude", lng);
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-10">
          <Button className="py-5" type="submit" disabled={pendding}>
            {pendding ? <LoadingSpinner /> : isEdit ? "گۆرانکاری" : "تۆمارکردن"}
          </Button>
          <Button asChild className="py-5" type="button">
            <Link href="/assisted">ڕەتکردنەوە</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}

const getDefaultValues = (values: Partial<addUAssistedType> = {}) => {
  const defaultValues: addUAssistedType = {
    fullName: "",
    currentAddress: "",
    city: "",
    latitude: 0,
    longitude: 0,
    currencyType: "",
    currentJob: "",
    dateOfBirth: new Date(),
    dateOfExpiry: new Date(),
    dateOfRegistration: new Date(),
    gender: "",
    biggestProblem: "",
    mainProblem: "",
    nationality: "",
    note: "",
    phoneNumber1: "",
    phoneNumber2: "",
    placeOfBirth: "",
    salary: "0",
    temporary: "false",
    drugs: "",
    // imageUrl: null,
  };

  return { ...defaultValues, ...values };
};

const currencyTypeValue = [
  {
    label: "دینار عێراق",
    value: "IQD",
  },
  {
    label: "دۆلاری ئەمریکی",
    value: "USD",
  },
];

export const typeOfTemporary = [
  {
    label: "کــاتــی",
    value: "false",
  },
  {
    label: "هــەمـیـشــەی",
    value: "true",
  },
];
export const typeOfGender = [
  {
    label: "نێر",
    value: "Male",
  },
  {
    label: "مێ",
    value: "Female",
  },
];
