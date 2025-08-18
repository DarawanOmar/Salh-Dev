import Image from "next/image";
import React, { Suspense } from "react";
import placeHolder from "@/public/empty-product.webp";
import { getOneUser } from "../_lib";
import { MdArrowBackIosNew } from "react-icons/md";
import { DataTable } from "@/components/reusable/table";
import column_recive from "./_components/column-recived";
import column_given from "./_components/column-given";
import Link from "next/link";

function OneUser({ params }: ParamsTypeUse) {
  return (
    <Suspense
      fallback={
        <div
          dir="ltr"
          className="h-screen grid place-items-center text-4xl font-semibold"
        >
          Loading...
        </div>
      }
    >
      <FeedPage params={params} />
    </Suspense>
  );
}

export default OneUser;

async function FeedPage({ params }: ParamsTypeUse) {
  const id = (await params).id || "";
  const oneUser = await getOneUser(id);
  return (
    <div className="">
      <div className="flex flex-row items-center gap-3 my-5">
        <Link href={"/users"} className="hover:underline hover:text-primary">
          بەکارهێنەر
        </Link>
        <MdArrowBackIosNew />
        <h1>پڕۆفایل</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 border p-3 rounded-md">
        <Image
          src={oneUser.data?.imageUrl || placeHolder}
          alt={oneUser.data?.name || "User Avatar"}
          width={100}
          height={100}
          className="rounded-md size-[200px] object-cover border"
        />
        <div className="grid gap-3">
          <p>ناوی بەکارهێنەر : {oneUser.data?.name}</p>
          <p>ناوی تەواوی : {oneUser.data?.fullName}</p>
          <p>چالاکە : {oneUser.data?.isActive ? "بەڵێ" : "نەخێر"}</p>
          <p>دەسەڵات : {oneUser.data?.role?.name || "نییە"}</p>
          <p>سەرنج : {oneUser.data?.note || "نییە"}</p>
        </div>
      </div>
      <div className="grid gap-3 my-10">
        <h1>پارەی وەرگیراو</h1>
        <DataTable
          data={oneUser.data?.MoneyReceived || []}
          columns={column_recive}
          isSearch={false}
          havePagination={false}
        />
      </div>
      <div className="grid gap-3 my-10">
        <h1>پارەی پێدراو</h1>
        <DataTable
          data={oneUser.data?.MoneyGiven || []}
          columns={column_given}
          isSearch={false}
          havePagination={false}
        />
      </div>
    </div>
  );
}
