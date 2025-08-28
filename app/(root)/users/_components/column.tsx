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
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { deleteUserAction } from "../_action";
import { User } from "../_type";
import AddUser from "./form/add-user";
import Link from "next/link";

const column: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ناو" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500">{row?.original?.name}</span>
      );
    },
  },

  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ئیمەیڵ" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.email}</span>;
    },
  },
  {
    accessorKey: "isActive",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ستەیت" />
    ),
    cell: ({ row }) => {
      return (
        <span
          className={`text-sm flex justify-center items-center gap-2 ${
            row?.original?.isActive ? "text-green-500" : "text-red-500"
          }`}
        >
          <div
            className={cn(
              "",
              row?.original?.isActive ? "bg-green-500" : "bg-red-500",
              "w-2 h-2 rounded-full "
            )}
          ></div>
          {row?.original?.isActive ? "چالاک" : "ناچالاک"}
        </span>
      );
    },
  },
  {
    accessorKey: "role.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ڕۆڵ" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.role?.name || "-"}</span>;
    },
  },
  {
    accessorKey: "profile",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="پروفایل" />
    ),
    cell: ({ row }) => {
      return (
        <Link href={`/users/${row?.original?.id}`}>
          <Button size={"sm"} className="rounded h-8 py-0 px-2">
            بــیــنــین
          </Button>
        </Link>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەروار" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500 flex justify-center">
          {format(new Date(row?.original?.createdAt), "yyyy-MM-dd")}
        </span>
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
                <AddUser
                  id={id}
                  isEdit
                  handleClose={handleClose}
                  info={{
                    roleId: row?.original?.role?.id || "",
                    email: row?.original?.email || "",
                    name: row?.original?.name || "",
                    password: "",
                    address: row.original?.address || "",
                    fullName: row.original?.fullName || "",
                    note: row.original?.note || "",
                    phone: row.original?.phone || "",
                    imageUrl: null,
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
                actionDelete={deleteUserAction}
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
