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
import { Role } from "../_type";
import { format } from "date-fns";
import AddRoleForm from "./form/add-role";
import { deleteRoleAction } from "../_action";
import { Branch } from "@/public/icons";
import ActivePermission from "./form/active-permission";

const column: ColumnDef<Role>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="دەسەڵات" />
    ),
    cell: ({ row }) => {
      return <span className="text-sm ">{row?.original?.name}</span>;
    },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بەرواری داخڵکردن" />
    ),
    cell: ({ row }) => {
      return (
        <span className="">
          {format(row?.original?.createdAt || new Date(), "dd/MM/yyyy")}
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
            <div className="flex justify-end items-center gap-5">
              <CustomDialog
                isFreshButtonPass
                button={
                  <Button>
                    <Branch />
                  </Button>
                }
                title={`ڕێــکــخـسـتـنی ڕۆڵ بــۆ ${row.original?.name}`}
              >
                <ActivePermission
                  permissions={row.original?.permissions}
                  roleId={row.original.id}
                />
              </CustomDialog>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
            </div>
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
                <AddRoleForm
                  id={id}
                  isEdit
                  handleClose={handleClose}
                  info={{
                    name: row.original?.name,
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
                actionDelete={deleteRoleAction}
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
