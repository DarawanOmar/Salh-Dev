"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef, Table } from "@tanstack/react-table";
import { MdHorizontalSplit } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ms-auto hidden h-10 lg:flex text-muted-foreground"
        >
          بینین
          <MdHorizontalSplit className="mr-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-fit  dark:border-white/5">
        <DropdownMenuLabel className="max-w-max mx-auto ">
          ڕیزەکان
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            const columnDef = column?.columnDef as ColumnDef<any>;
            let headerTitle = column?.id;
            if (typeof columnDef?.header === "string") {
              headerTitle = columnDef?.header;
            } else if (typeof columnDef?.header === "function") {
              const headerContext = { column, header: column } as any;
              const headerContent = columnDef?.header(headerContext);
              headerTitle = headerContent?.props?.title || column?.id;
            }

            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize text-wrap"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {headerTitle}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
