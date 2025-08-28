import Image from "next/image";
import React, { Suspense } from "react";
import placeHolder from "@/public/empty-product.webp";
import { getOneCharitable } from "../_lib";
import {
  MdArrowBackIosNew,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Link from "next/link";
import OneUserSkleton from "../../users/[id]/_components/skleton";
import { Button } from "@/components/ui/button";

function OneUser({ params }: ParamsTypeUse) {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center my-5 px-5">
        <div className="flex flex-row items-center gap-3 my-5">
          <Link
            href={"/charitable"}
            className="hover:underline hover:text-primary"
          >
            خــێـــرخــواز
          </Link>
          <MdArrowBackIosNew />
          <h1>پڕۆفایل</h1>
        </div>

        <Link href={"/charitable"}>
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
  const oneCommittee = await getOneCharitable(id);
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row items-center gap-5 border p-3 rounded-md">
        <Image
          src={oneCommittee.data?.imageUrl || placeHolder}
          alt={oneCommittee.data?.fullName || "User Avatar"}
          width={100}
          height={100}
          className="rounded-md size-[200px] object-cover border"
        />
        <div className="grid gap-3">
          <p>ناوی تەواو : {oneCommittee.data?.fullName}</p>
          <p>ناونیشان : {oneCommittee.data?.address}</p>
          <p>ژمارەی مۆبایل : {oneCommittee.data?.phone || "نییە"}</p>
          <p>وەسف : {oneCommittee.data?.description || "نییە"}</p>
        </div>
      </div>
    </div>
  );
}
