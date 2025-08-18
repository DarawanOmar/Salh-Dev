import Title from "@/components/layout/title";
import React, { Suspense } from "react";
import ModalAddCommitee from "./_components/form/modal-add-commitee";
import TableFallback from "@/components/reusable/table-fallback";
import { DataTable } from "@/components/reusable/table";
import column from "./_components/column";
import { getAllCommitee } from "./_lib";
import { getParams } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committe",
};

async function CommiteePage({ searchParams }: SearchParamsTypeUse) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <Title title="لــــیـــژنـــەکــان" />
        <ModalAddCommitee />
      </div>
      <Suspense fallback={<TableFallback />}>
        <FeedCommitee searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default CommiteePage;

async function FeedCommitee({ searchParams }: SearchParamsTypeUse) {
  const { page, search } = await getParams(searchParams, [
    { key: "page", defaultValue: "1" },
    "search",
  ]);

  const getCommittee = await getAllCommitee(page, search);

  return (
    <DataTable
      currentPage={+page}
      totalPage={
        (getCommittee.data?.meta?.total || 1) / 10 < 1
          ? 1
          : (getCommittee.data?.meta?.total || 1) / 10
      }
      data={getCommittee.data?.data || []}
      columns={column}
    />
  );
}
