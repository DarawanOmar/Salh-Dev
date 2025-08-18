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
import { Assisted } from "@/app/(root)/assisted/_type";
import { deleteOwningAction } from "@/app/(root)/assisted/_action";
import AddOwningForm from "./form/add-owning";

const columnOwning: ColumnDef<Assisted["Owning"][0]>[] = [
  {
    accessorKey: "typeOfOwning",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="جۆری خــاوەندارێتی" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500">
          {row?.original?.typeOfOwning}
        </span>
      );
    },
  },

  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نرخ" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.price}</span>;
    },
  },
  {
    accessorKey: "typeOfCurrency",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="جۆری دراو" />
    ),
    cell: ({ row }) => {
      return (
        <span className="text-sm text-gray-500 flex justify-center">
          {row?.original?.typeOfCurrency === "USD" ? "دۆلار" : "دینار"}
        </span>
      );
    },
  },
  {
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="سەرنج" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.note || "-"}</span>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وردەکــاری" />
    ),
    cell: ({ row }) => {
      return <span className="">{row?.original?.description || "-"}</span>;
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
                <AddOwningForm
                  id={id}
                  isEdit
                  handleClose={handleClose}
                  info={{
                    description: row?.original?.description,
                    headMemberId: row?.original?.headMemberId,
                    note: row?.original?.note,
                    price: row?.original?.price.toString(),
                    typeOfCurrency: row?.original?.typeOfCurrency,
                    typeOfOwning: row?.original?.typeOfOwning,
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
                actionDelete={deleteOwningAction}
                id={id}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default columnOwning;
