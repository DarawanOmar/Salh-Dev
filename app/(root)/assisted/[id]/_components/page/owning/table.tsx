import { DataTable } from "@/components/reusable/table";
import Link from "next/link";
import React from "react";
import { Assisted } from "@/app/(root)/assisted/_type";
import { MdArrowBackIosNew } from "react-icons/md";
import ModalAddOwning from "./form/modal-add-owning";
import columnOwning from "./column";

type Props = {
  data: Assisted["Owning"][0][];
  isQrcodePage?: boolean;
};

function TableOwning({ data, isQrcodePage = true }: Props) {
  return (
    <div className="my-10">
      {isQrcodePage ? null : (
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5">
          <div className="flex flex-row items-center gap-3 my-5">
            <Link
              href={"/users"}
              className="hover:underline hover:text-primary"
            >
              هــاوکـــاریــکــراو
            </Link>
            <MdArrowBackIosNew />
            <h1>خــاوەندارێتی</h1>
          </div>
          <ModalAddOwning />
        </div>
      )}
      <DataTable
        havePagination={false}
        data={data || []}
        columns={columnOwning}
      />
    </div>
  );
}

export default TableOwning;
