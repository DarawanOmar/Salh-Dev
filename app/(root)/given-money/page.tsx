import Title from "@/components/layout/title";
import React, { Suspense } from "react";
import TableFallback from "@/components/reusable/table-fallback";
import { DataTable } from "@/components/reusable/table";
import column from "./_components/column";
import { getParams } from "@/lib/utils";
import { Metadata } from "next";
import { getAllGiven } from "./_lib";
import ModalAddGiven from "./_components/form/modal-given-money";

export const metadata: Metadata = {
  title: "Given",
};

async function GivenPage({ searchParams }: SearchParamsTypeUse) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <Title title="پـــارەی دەرچـــوو" />
        <ModalAddGiven />
      </div>
      <Suspense fallback={<TableFallback />}>
        <FeedGiven searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default GivenPage;

async function FeedGiven({ searchParams }: SearchParamsTypeUse) {
  const { page, search } = await getParams(searchParams, [
    { key: "page", defaultValue: "1" },
    "search",
  ]);

  const getGiven = await getAllGiven(page, search);

  return (
    <DataTable
      currentPage={+page}
      totalPage={
        (getGiven.data?.meta?.total || 1) / 10 < 1
          ? 1
          : (getGiven.data?.meta?.total || 1) / 10
      }
      data={getGiven.data?.data || []}
      columns={column}
    />
  );
}
