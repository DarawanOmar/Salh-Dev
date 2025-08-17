"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableViewOptions } from "./data-table-view-option";
import PaginatedComponent from "../ui/pagination";
import { Skeleton } from "../ui/skeleton";
import SearchTable from "./searchTable";

interface DataTableProps<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  havePagination?: boolean;
  isSearch?: boolean;
  totalPage?: number;
  currentPage?: number;
  pageSize?: number;
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({
  data,
  columns,
  havePagination = true,
  isSearch = true,
  currentPage,
  totalPage,
  pageSize,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize: pageSize || 50000,
      },
    },
  });

  return (
    <div className="w-full">
      {isSearch && (
        <div className="flex items-center py-4">
          <React.Suspense>
            <SearchTable />
          </React.Suspense>
          <DataTableViewOptions table={table} />
        </div>
      )}
      <div className="rounded-md p-2 border  dark:border-white/5">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="dark:border-white/5">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="text-primary  text-center   "
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  {columns.map((_, i) => (
                    <TableCell key={i} className="text-center">
                      <Skeleton className="h-6 w-full rounded" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="dark:border-white/5"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className=" text-center  " key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  هیچ زانیارەک نییە لە ئێستادا
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {havePagination && (
        <div className="my-5 flex justify-end items-end">
          <PaginatedComponent
            currentPage={currentPage || 1}
            totalPages={totalPage || 1}
          />
        </div>
      )}
    </div>
  );
}
