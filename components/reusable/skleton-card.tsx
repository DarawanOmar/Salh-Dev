import { cn } from "@/lib/utils";
import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {
  length: number;
  className?: string;
  classNameCard?: string;
};

function SkletonCard({ length, className, classNameCard }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5",
        className
      )}
    >
      {Array.from({ length }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("max-w-full w-full h-40", classNameCard)}
        />
      ))}
    </div>
  );
}

export default SkletonCard;
