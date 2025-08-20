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
import { Charitable } from "../_type";
import { deleteCharitableAction } from "../_action";
import AddCharitableForm from "./form/add-charitable";

const column: ColumnDef<Charitable>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ناو" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500">{row?.original?.fullName}</span>
      );
    },
  },

  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ژمارەی مۆبایل" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.phone}</span>;
    },
  },

  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ناونیشان" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.address || "-"}</span>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وەسف" />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-wrap line-clamp-1 hover:line-clamp-none">
          {row?.original?.description || "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "profile",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="پروفایل" />
    ),
    cell: ({ row }) => {
      return (
        <Link href={`/charitable/${row?.original?.id}`}>
          <Button size={"sm"} className="rounded h-8 py-0 px-2">
            بــیــنــین
          </Button>
        </Link>
      );
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
                <AddCharitableForm
                  id={id}
                  isEdit
                  handleClose={handleClose}
                  info={{
                    fullName: row?.original?.fullName,
                    address: row.original?.address,
                    description: row.original?.description,
                    phone: row.original?.phone,
                  }}
                />
              </CustomDialog>
              <hr className="border-gray" />
              <ReusableDeleteDailog
                title="دڵنیایت لە سڕینەوەی بەکارهێنەر"
                isFreshButtonPass
                button={
                  <button className="flex gap-2 items-center font-sirwan_reguler  hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-b-lg w-full ">
                    <TrashIcon height={18} width={18} />
                    <span className="text-sm">سڕینەوە</span>
                  </button>
                }
                actionDelete={deleteCharitableAction}
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
