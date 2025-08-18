import Title from "@/components/layout/title";
import React, { Suspense } from "react";
import TableFallback from "@/components/reusable/table-fallback";
import { DataTable } from "@/components/reusable/table";
import column from "./_components/column";
import { getParams } from "@/lib/utils";
import { Metadata } from "next";
import { getAllRecivedMoney } from "./_lib";
import ModalAddRecivedMoney from "./_components/form/modal-recived-money";

export const metadata: Metadata = {
  title: "RecivedMoney",
};

async function RecivedMoneyPage({ searchParams }: SearchParamsTypeUse) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <Title title="پـــارەی هــاتــوو" />
        <ModalAddRecivedMoney />
      </div>
      <Suspense fallback={<TableFallback />}>
        <FeedRecivedMoney searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default RecivedMoneyPage;

async function FeedRecivedMoney({ searchParams }: SearchParamsTypeUse) {
  const { page, search } = await getParams(searchParams, [
    { key: "page", defaultValue: "1" },
    "search",
  ]);

  const getRecivedMoney = await getAllRecivedMoney(page, search);

  return (
    <DataTable
      currentPage={+page}
      totalPage={
        (getRecivedMoney.data?.meta?.total || 1) / 10 < 1
          ? 1
          : (getRecivedMoney.data?.meta?.total || 1) / 10
      }
      data={getRecivedMoney.data?.data || []}
      columns={column}
    />
  );
}
