"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EditIcon, MoreVertical, TrashIcon } from "lucide-react";
import { DataTableColumnHeader } from "@/components/reusable/data-table-column-header";
import CustomDialog from "@/components/reusable/resusable-dialog";
import ReusableDeleteDailog from "@/components/reusable/reusable-delete-dialog";
import Link from "next/link";
import AddCharitableForm from "./form/add-recived-money";
import { RecivedMoney } from "../_type";
import { format } from "date-fns";
import AddRecivedMoneyForm from "./form/add-recived-money";
import { deleteRecivedMoneyAction } from "../_action";

const column: ColumnDef<RecivedMoney>[] = [
  {
    accessorKey: "charitable.fullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ناوی تەواو" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500">
          {row?.original?.charitable?.fullName}
        </span>
      );
    },
  },

  {
    accessorKey: "insertedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەرواری داخڵکردن" />
    ),
    cell: ({ row }) => {
      return (
        <span className="">
          {format(row?.original?.insertedAt || new Date(), "dd/MM/yyyy")}
        </span>
      );
    },
  },

  {
    accessorKey: "user.fullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەکارهێنەر" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.user?.fullName || "-"}</span>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بڕی پارە" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.amount || "-"}</span>;
    },
  },
  {
    accessorKey: "currencyType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="جۆری پارە" />
    ),
    cell: ({ row }) => {
      return (
        <span className="">
          {row?.original?.currencyType === "IQD"
            ? "دینار عێراق"
            : "دۆلاری ئەمریکی"}
        </span>
      );
    },
  },
  {
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وەسف" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.note || "-"}</span>;
    },
  },
  {
    id: "actions",
    cell: function CellComponent({ row }) {
      const [open, setOpen] = React.useState(false);
      const handleClose = () => setOpen((prev) => !prev);
      const { id } = row.original;
      return (
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-1" align="end">
              <CustomDialog
                open={open}
                onOpenChange={setOpen}
                isFreshButtonPass
                title="گۆرانکاری"
                classContent="max-w-4xl"
                button={
                  <button className="flex gap-2 items-center font-sirwan_reguler  hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-t-lg w-full">
                    <EditIcon height={18} width={18} />
                    <span className="text-sm">گۆرانکاری</span>
                  </button>
                }
              >
                <AddRecivedMoneyForm
                  id={id}
                  isEdit
                  handleClose={handleClose}
                  info={{
                    amount: +row.original?.amount || 0,
                    currencyType: row.original?.currencyType || "",
                    note: row.original?.note || "",
                    charitableId: row.original.charitableId || "",
                    userId: row.original?.userId || "",
                    safeId: row.original?.safeId || "",
                  }}
                />
              </CustomDialog>
              <hr className="border-gray" />
              <ReusableDeleteDailog
                title="دڵنیایت لە سڕینەوەی پارەی هاتوو"
                isFreshButtonPass
                button={
                  <button className="flex gap-2 items-center font-sirwan_reguler  hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-b-lg w-full ">
                    <TrashIcon height={18} width={18} />
                    <span className="text-sm">سڕینەوە</span>
                  </button>
                }
                actionDelete={deleteRecivedMoneyAction}
                id={id}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default column;
