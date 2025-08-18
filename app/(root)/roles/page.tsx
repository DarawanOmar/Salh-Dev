import Title from "@/components/layout/title";
import React, { Suspense } from "react";
import TableFallback from "@/components/reusable/table-fallback";
import { DataTable } from "@/components/reusable/table";
import column from "./_components/column";
import { getParams } from "@/lib/utils";
import { Metadata } from "next";
import { getAllRole } from "./_lib";
import ModalAddRole from "./_components/form/modal-add-role";

export const metadata: Metadata = {
  title: "Role",
};

async function RolePage({ searchParams }: SearchParamsTypeUse) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <Title title="ڕۆڵـــەکـــان" />
        <ModalAddRole />
      </div>
      <Suspense fallback={<TableFallback />}>
        <FeedRole searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default RolePage;

async function FeedRole({ searchParams }: SearchParamsTypeUse) {
  const { page, search } = await getParams(searchParams, [
    { key: "page", defaultValue: "1" },
    "search",
  ]);

  const getRole = await getAllRole(page, search);

  return (
    <DataTable
      currentPage={+page}
      totalPage={
        (getRole.data?.meta?.total || 1) / 10 < 1
          ? 1
          : (getRole.data?.meta?.total || 1) / 10
      }
      data={getRole.data?.data || []}
      columns={column}
    />
  );
}
