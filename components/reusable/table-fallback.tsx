import React from "react";
import { DataTable } from "./table";
import column from "@/app/(root)/users/_components/column";

function TableFallback() {
  return (
    <React.Suspense>
      <DataTable data={[]} columns={column} isLoading />
    </React.Suspense>
  );
}

export default TableFallback;
