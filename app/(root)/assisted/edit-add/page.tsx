import { getParams } from "@/lib/utils";
import React from "react";
import AddAssisted from "./_components/form/add-assisted";
import { addUAssistedType } from "../_type";
import { getOneAssisted } from "../_lib";
import {
  MdArrowBackIosNew,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function EditAddAssisted({ searchParams }: SearchParamsTypeUse) {
  const { type, id } = await getParams(searchParams, [
    { key: "type", defaultValue: "add" },
    { key: "id", defaultValue: "" },
  ]);
  const isEditMode = type === "edit" && id ? true : false;
  let info: addUAssistedType = {} as addUAssistedType;
  if (isEditMode) {
    const result = await getOneAssisted(id);
    if (result.success) {
      info = {
        currentAddress: result?.data?.currentAddress || "",
        dateOfBirth: result?.data?.dateOfBirth || "",
        city: result?.data?.city || "",
        note: result?.data?.note || "",
        nationality: result?.data?.nationality || "",
        placeOfBirth: result?.data?.placeOfBirth || "",
        gender: result?.data?.gender || "",
        dateOfRegistration: result?.data?.dateOfRegistration || "",
        salary: result?.data?.salary || "",
        currencyType: result?.data?.currencyType || "",
        currentJob: result?.data?.currentJob || "",
        dateOfExpiry: result?.data?.dateOfExpiry || new Date(),
        temporary: result?.data?.temporary || "false",
        biggestProblem: result?.data?.biggestProblem || "",
        phoneNumber1: result?.data?.phoneNumber1 || "",
        phoneNumber2: result?.data?.phoneNumber2 || "",
        mainProblem: result?.data?.mainProblem || "",
        imageUrl: result?.data?.imageUrl || null,
        fullName: result?.data?.fullName || "",
        latitude: result?.data?.latitude || 0,
        longitude: result?.data?.longitude || 0,
      } as addUAssistedType;
    } else {
      return <div className="text-red-500">Error: {result.message}</div>;
    }
  }
  return (
    <>
      <div className="flex justify-between items-center my-5 px-5">
        <div className="flex flex-row items-center gap-3 my-5">
          <Link
            href={"/assisted"}
            className="hover:underline hover:text-primary"
          >
            هــاوکــاریــکــراون
          </Link>
          <MdArrowBackIosNew />
          <h1>زیــادکــردنــی هـــاوکـــاریــکــراو</h1>
        </div>
        <Link href={"/assisted"}>
          <Button>
            گــەڕانــەوە <MdOutlineKeyboardDoubleArrowLeft />
          </Button>
        </Link>
      </div>
      <AddAssisted id={id} isEdit={isEditMode} info={info} />;
    </>
  );
}

export default EditAddAssisted;
