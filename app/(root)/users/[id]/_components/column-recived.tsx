"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { DataTableColumnHeader } from "@/components/reusable/data-table-column-header";
import { User } from "../../_type";

const column_recive: ColumnDef<User["MoneyReceived"][0]>[] = [
  {
    accessorKey: "insertedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەروار" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500 flex justify-center">
          {format(new Date(row?.original?.insertedAt), "yyyy-MM-dd")}
        </span>
      );
    },
  },

  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بڕی پارە" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.amount}</span>;
    },
  },

  {
    accessorKey: "currencyType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="جۆری پارە" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.currencyType}</span>;
    },
  },
  {
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تێبینی" />
    ),
  },
];

export default column_recive;
