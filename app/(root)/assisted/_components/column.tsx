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
import ReusableDeleteDailog from "@/components/reusable/reusable-delete-dialog";
import Link from "next/link";
import { Assisted } from "../_type";
import { deleteAssistedAction } from "../_action";
import { format } from "date-fns";

const column: ColumnDef<Assisted>[] = [
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
    accessorKey: "phoneNumber1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ژمارەی مۆبایل" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.phoneNumber1}</span>;
    },
  },

  {
    accessorKey: "dateOfRegistration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەرواری تۆمارکردن" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500 flex justify-center">
          {format(new Date(row?.original?.dateOfRegistration), "yyyy-MM-dd")}
        </span>
      );
    },
  },
  {
    accessorKey: "dateOfExpiry",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەرواری بەسەرچوون" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500 flex justify-center">
          {format(new Date(row?.original?.dateOfExpiry), "yyyy-MM-dd")}
        </span>
      );
    },
  },
  {
    accessorKey: "currentAddress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ناونیشانی ئێستای" />
    ),
  },
  {
    accessorKey: "salary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="مــووچــە" />
    ),
  },
  {
    accessorKey: "profile",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="پروفایل" />
    ),
    cell: ({ row }) => {
      return (
        <Link href={`/assisted/${row?.original?.id}`}>
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
              <Link href={`/assisted/edit-add?type=edit&id=${id}`}>
                <button className="flex gap-2 items-center font-sirwan_reguler  hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-t-lg w-full">
                  <EditIcon height={18} width={18} />
                  <span className="text-sm">گۆرانکاری</span>
                </button>
              </Link>

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
                actionDelete={deleteAssistedAction}
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
