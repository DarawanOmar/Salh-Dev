import React, { Suspense } from "react";
import { getOneUser } from "../_lib";
import {
  MdArrowBackIosNew,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { DataTable } from "@/components/reusable/table";
import column_recive from "./_components/column-recived";
import column_given from "./_components/column-given";
import Link from "next/link";
import InfoUser from "./_components/info-user";
import { User } from "../_type";
import OneUserSkleton from "./_components/skleton";
import { Button } from "@/components/ui/button";

function OneUser({ params }: ParamsTypeUse) {
  return (
    <div className="">
      <div className="flex justify-between items-center my-5 px-5">
        <div className="flex flex-row items-center gap-3 my-5">
          <Link href={"/users"} className="hover:underline hover:text-primary">
            بەکارهێنەر
          </Link>
          <MdArrowBackIosNew />
          <h1>پڕۆفایل</h1>
        </div>
        <Link href={"/users"}>
          <Button>
            گــەڕانــەوە <MdOutlineKeyboardDoubleArrowLeft />
          </Button>
        </Link>
      </div>

      <Suspense fallback={<OneUserSkleton />}>
        <FeedPage params={params} />
      </Suspense>
    </div>
  );
}

export default OneUser;

async function FeedPage({ params }: ParamsTypeUse) {
  const id = (await params).id || "";
  const oneUser = await getOneUser(id);
  return (
    <>
      <InfoUser oneUser={oneUser.data || ({} as User)} />
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
    </>
  );
}
