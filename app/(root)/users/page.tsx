import Title from "@/components/layout/title";
import React, { Suspense } from "react";
import ModalAddUser from "./_components/form/modal-add-user";
import TableFallback from "@/components/reusable/table-fallback";
import { DataTable } from "@/components/reusable/table";
import column from "./_components/column";
import { getAllUsers } from "./_lib";
import { getParams } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

async function Users({ searchParams }: SearchParamsTypeUse) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <Title title="بــەکــارهـێـنـەرەکـان" />
        <ModalAddUser />
      </div>
      <Suspense fallback={<TableFallback />}>
        <FeedUser searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default Users;

async function FeedUser({ searchParams }: SearchParamsTypeUse) {
  const { page, search } = await getParams(searchParams, [
    { key: "page", defaultValue: "1" },
    "search",
  ]);

  const getUsers = await getAllUsers(page, search);

  return (
    <DataTable
      currentPage={+page}
      totalPage={
        (getUsers.data?.meta?.total || 1) / 10 < 1
          ? 1
          : (getUsers.data?.meta?.total || 1) / 10
      }
      data={getUsers.data?.data || []}
      columns={column}
    />
  );
}
