import React, { Suspense } from "react";
import { getOneAssisted } from "../_lib";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import { DetailInfo } from "./_components/details-info";
import { Assisted } from "../_type";
import TabChange from "./_components/tab-lang-change";
import DocumentVideoImage from "./_components/document-video-image";
import { getParams } from "@/lib/utils";
import TableFamilyMember from "./_components/page/family-member/table";
import TableOwning from "./_components/page/owning/table";
import TableCommitteeAssisted from "./_components/page/committee-assisted/table";
import OneUserSkleton from "../../users/[id]/_components/skleton";

function OneUser({ params, searchParams }: ParamsSearchParamsTypeUser) {
  return (
    <div className="space-y-5">
      <div className="flex flex-row items-center gap-3 my-5">
        <Link href={"/assisted"} className="hover:underline hover:text-primary">
          هــاوکــاریــکــراون
        </Link>
        <MdArrowBackIosNew />
        <h1>پڕۆفایل</h1>
      </div>
      <Suspense fallback={<OneUserSkleton isAssisted />}>
        <FeedPage params={params} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default OneUser;

async function FeedPage({ params, searchParams }: ParamsSearchParamsTypeUser) {
  const id = (await params).id || "";
  const { tab } = await getParams(searchParams, [
    { key: "tab", defaultValue: "family_member" },
  ]);
  const oneCommittee = await getOneAssisted(id);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <>
      <DetailInfo oneCommittee={oneCommittee.data || ({} as Assisted)} />
      <div className="max-w-3xl mx-auto mt-10">
        <TabChange />
      </div>
      {tab === "family_member" ? (
        <TableFamilyMember data={oneCommittee.data?.FamilyMember || []} />
      ) : tab === "owning" ? (
        <TableOwning data={oneCommittee.data?.Owning || []} />
      ) : (
        <TableCommitteeAssisted
          data={oneCommittee.data?.CommitteeMember || []}
        />
      )}
      <DocumentVideoImage
        houseDescription={oneCommittee.data?.HouseDescription || []}
        Documents={oneCommittee.data?.Documents || []}
        videos={oneCommittee.data?.videos || []}
      />
    </>
  );
}
