import Title from "@/components/layout/title";
import React, { Suspense } from "react";
import TableFallback from "@/components/reusable/table-fallback";
import { DataTable } from "@/components/reusable/table";
import column from "./_components/column";
import { getParams } from "@/lib/utils";
import { Metadata } from "next";
import ModalAddCharitable from "./_components/form/modal-add-charitable";
import { getAllCharitable } from "./_lib";

export const metadata: Metadata = {
  title: "Charitable",
};

async function CharitablePage({ searchParams }: SearchParamsTypeUse) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <Title title="خــێـــرخــواز" />
        <ModalAddCharitable />
      </div>
      <Suspense fallback={<TableFallback />}>
        <FeedCharitable searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default CharitablePage;

async function FeedCharitable({ searchParams }: SearchParamsTypeUse) {
  const { page, search } = await getParams(searchParams, [
    { key: "page", defaultValue: "1" },
    "search",
  ]);

  const getCharitable = await getAllCharitable(page, search);

  return (
    <DataTable
      currentPage={+page}
      totalPage={
        (getCharitable.data?.meta?.total || 1) / 10 < 1
          ? 1
          : (getCharitable.data?.meta?.total || 1) / 10
      }
      data={getCharitable.data?.data || []}
      columns={column}
    />
  );
}
