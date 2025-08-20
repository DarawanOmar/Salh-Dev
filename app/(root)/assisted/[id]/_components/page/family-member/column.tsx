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
import { Assisted } from "@/app/(root)/assisted/_type";
import AddFamilyMemberForm from "./form/add-family-member";
import { deleteFamilyMemberAction } from "@/app/(root)/assisted/_action";

const columnFamilyMember: ColumnDef<Assisted["FamilyMember"][0]>[] = [
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
    accessorKey: "dateOfBirth",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەرواری لە دایکبوون" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500 flex justify-center">
          {format(
            new Date(row?.original?.dateOfBirth || new Date()),
            "yyyy-MM-dd"
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ڕەگەز" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.gender || "-"}</span>;
    },
  },
  {
    accessorKey: "typeOfJob",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="جۆری کار" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.typeOfJob || "-"}</span>;
    },
  },
  {
    accessorKey: "placeOfWork",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شوێنی کار" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.placeOfWork || "-"}</span>;
    },
  },
  {
    accessorKey: "isMarried",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="دۆخی زواج" />
    ),
    cell: ({ row }) => {
      return (
        <span className="">
          {row?.original?.isMarried ? "بـەڵــێ" : "نـەخـێـر"}
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
                <AddFamilyMemberForm
                  id={id}
                  isEdit
                  handleClose={handleClose}
                  info={{
                    fullName: row?.original?.fullName,
                    dateOfBirth:
                      new Date(row?.original?.dateOfBirth) || new Date(),
                    gender: row?.original?.gender,
                    isMarried: row?.original?.isMarried.toString(),
                    phone: row?.original?.phone,
                    placeOfWork: row?.original?.placeOfWork,
                    typeOfJob: row?.original?.typeOfJob,
                    headMemberId: row?.original?.headMemberId,
                  }}
                />
              </CustomDialog>
              <hr className="border-gray" />
              <ReusableDeleteDailog
                title="دڵنیایت لە سڕینەوەی ئەندامی خێزان"
                isFreshButtonPass
                button={
                  <button className="flex gap-2 items-center font-sirwan_reguler  hover:bg-primary hover:text-white transition-all duration-500 p-2 rounded-b-lg w-full ">
                    <TrashIcon height={18} width={18} />
                    <span className="text-sm">سڕینەوە</span>
                  </button>
                }
                actionDelete={deleteFamilyMemberAction}
                id={id}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default columnFamilyMember;
