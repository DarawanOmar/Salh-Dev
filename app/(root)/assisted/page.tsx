import Title from "@/components/layout/title";
import React, { Suspense } from "react";
import TableFallback from "@/components/reusable/table-fallback";
import { DataTable } from "@/components/reusable/table";
import column from "./_components/column";
import { getAllAssisted } from "./_lib";
import { getParams } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Committe",
};

async function AssistedPage({ searchParams }: SearchParamsTypeUse) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <Title title="هــاوکـــاریــکــراو" />
        <Link href="/assisted/edit-add?type=add">
          <Button>زیادکردنی هــاوکـــاریــکــراو</Button>
        </Link>
      </div>
      <Suspense fallback={<TableFallback />}>
        <FeedAssisted searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default AssistedPage;

async function FeedAssisted({ searchParams }: SearchParamsTypeUse) {
  const { page, search } = await getParams(searchParams, [
    { key: "page", defaultValue: "1" },
    "search",
  ]);

  const getAssisted = await getAllAssisted(page, search);

  return (
    <DataTable
      currentPage={+page}
      totalPage={
        (getAssisted.data?.meta?.total || 1) / 10 < 1
          ? 1
          : (getAssisted.data?.meta?.total || 1) / 10
      }
      data={getAssisted.data?.data || []}
      columns={column}
    />
  );
}
