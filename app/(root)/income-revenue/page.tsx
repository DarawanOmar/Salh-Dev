import Title from "@/components/layout/title";
import React, { Suspense } from "react";
import TableFallback from "@/components/reusable/table-fallback";
import { DataTable } from "@/components/reusable/table";
import column from "./_components/column";
import { getParams } from "@/lib/utils";
import { Metadata } from "next";
import { getAllIncomeRevenue } from "./_lib";
import ModalAddIncomeRevenue from "./_components/form/modal-income-revenue";

export const metadata: Metadata = {
  title: "IncomeRevenue",
};

async function IncomeRevenuePage({ searchParams }: SearchParamsTypeUse) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <Title title="پـــارەی هــاتــوو" />
        <ModalAddIncomeRevenue />
      </div>
      <Suspense fallback={<TableFallback />}>
        <FeedIncomeRevenue searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default IncomeRevenuePage;

async function FeedIncomeRevenue({ searchParams }: SearchParamsTypeUse) {
  const { page, search } = await getParams(searchParams, [
    { key: "page", defaultValue: "1" },
    "search",
  ]);

  const getIncomeRevenue = await getAllIncomeRevenue(page, search);

  return (
    <DataTable
      currentPage={+page}
      totalPage={
        (getIncomeRevenue.data?.meta?.total || 1) / 10 < 1
          ? 1
          : (getIncomeRevenue.data?.meta?.total || 1) / 10
      }
      data={getIncomeRevenue.data?.data || []}
      columns={column}
    />
  );
}
