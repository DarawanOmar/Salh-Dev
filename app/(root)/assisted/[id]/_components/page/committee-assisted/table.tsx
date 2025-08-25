import { DataTable } from "@/components/reusable/table";
import Link from "next/link";
import React from "react";
import { Assisted } from "@/app/(root)/assisted/_type";
import { MdArrowBackIosNew } from "react-icons/md";
import ModalAddCommitteeAssiste from "./form/modal-add-committe";
import columnCommitteeAssisted from "./column";

type Props = {
  data: Assisted["CommitteeMember"][0][];
};

function TableCommitteeAssisted({ data }: Props) {
  return (
    <div className="my-10">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5">
        <div className="flex flex-row items-center gap-3 my-5">
          <Link href={"/users"} className="hover:underline hover:text-primary">
            هــاوکـــاریــکــراو
          </Link>
          <MdArrowBackIosNew />
          <h1>لــیــســتی لــیــژنە</h1>
        </div>
        <ModalAddCommitteeAssiste />
      </div>
      <DataTable
        havePagination={false}
        data={data || []}
        columns={columnCommitteeAssisted}
      />
    </div>
  );
}

export default TableCommitteeAssisted;
