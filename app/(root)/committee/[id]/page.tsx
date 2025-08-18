import Image from "next/image";
import React, { Suspense } from "react";
import placeHolder from "@/public/empty-product.webp";
import { getOneCommitee } from "../_lib";
import { MdArrowBackIosNew } from "react-icons/md";
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
  const oneCommittee = await getOneCommitee(id);
  return (
    <div className="">
      <div className="flex flex-row items-center gap-3 my-5">
        <Link
          href={"/committee"}
          className="hover:underline hover:text-primary"
        >
          لــیــژنــە
        </Link>
        <MdArrowBackIosNew />
        <h1>پڕۆفایل</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 border p-3 rounded-md">
        <Image
          src={oneCommittee.data?.imageUrl || placeHolder}
          alt={oneCommittee.data?.name || "User Avatar"}
          width={100}
          height={100}
          className="rounded-md size-[200px] object-cover border"
        />
        <div className="grid gap-3">
          <p>ناوی لــیــژنــە : {oneCommittee.data?.name}</p>
          <p>ناونیشان : {oneCommittee.data?.address}</p>
          <p>ژمارەی مۆبایل : {oneCommittee.data?.phone || "نییە"}</p>
          <p>سەرنج : {oneCommittee.data?.note || "نییە"}</p>
        </div>
      </div>
    </div>
  );
}
