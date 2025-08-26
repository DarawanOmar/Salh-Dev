import TableFallback from "@/components/reusable/table-fallback";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {
  isUser?: boolean;
  isAssisted?: boolean;
};

function OneUserSkleton({ isUser, isAssisted }: Props) {
  return (
    <div className="space-y-10">
      <div className="p-2 border rounded-lg">
        <Skeleton className="max-w-full w-full h-52" />
      </div>
      {isUser ? (
        <>
          <div className="">
            <h1>پارەی وەرگیراو</h1>
            <Skeleton className="max-w-full w-full h-32 mt-2" />
          </div>
          <div className="">
            <h1>پارەی پێدراو</h1>
            <Skeleton className="max-w-full w-full h-32 mt-2" />
          </div>
        </>
      ) : null}
      {isAssisted ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Skeleton className="max-w-full w-full h-52" />
            <Skeleton className="max-w-full w-full h-52" />
          </div>
          <TableFallback />
        </>
      ) : null}
    </div>
  );
}

export default OneUserSkleton;
