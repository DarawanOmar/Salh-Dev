import { DataTable } from "@/components/reusable/table";
import Link from "next/link";
import React from "react";
import columnFamilyMember from "./column";
import { Assisted } from "@/app/(root)/assisted/_type";
import { MdArrowBackIosNew } from "react-icons/md";
import ModalAddFamilyMember from "./form/modal-add-family-member";

type Props = {
  data: Assisted["FamilyMember"][0][];
};

function TableFamilyMember({ data }: Props) {
  return (
    <div className="my-10">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5">
        <div className="flex flex-row items-center gap-3 my-5">
          <Link href={"/users"} className="hover:underline hover:text-primary">
            هــاوکـــاریــکــراو
          </Link>
          <MdArrowBackIosNew />
          <h1>ئەندامانی خێزان</h1>
        </div>
        <ModalAddFamilyMember />
      </div>
      <DataTable
        havePagination={false}
        data={data || []}
        columns={columnFamilyMember}
      />
    </div>
  );
}

export default TableFamilyMember;
