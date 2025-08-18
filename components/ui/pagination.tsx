"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQueryState } from "nuqs";
import { Button } from "./button";

const PaginatedComponent = ({
  totalPages,
  currentPage,
  className,
}: {
  totalPages: number;
  currentPage: number;
  className?: string;
}) => {
  const currentPageNumber = currentPage < 1 ? 1 : currentPage;
  const [page, setPage] = useQueryState("page", {
    defaultValue: "",
    shallow: false,
  });

  const handlePageChange = (page: number) => {
    setPage(page.toString());
  };

  const generatePages = () => {
    const pages = [];
    const current = Number(currentPageNumber);

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current > 3) pages.push("...");

      for (
        let i = Math.max(2, current - 1);
        i <= Math.min(totalPages - 1, current + 1);
        i++
      ) {
        pages.push(i);
      }

      if (current < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div
      className={cn("flex flex-wrap  max-wxl  gap-5 msauto  ", className)}
      dir="ltr"
    >
      {/* Previous ButtonButton */}
      <Button
        size={"sm"}
        disabled={Number(currentPageNumber) === 1}
        onClick={() => handlePageChange(Number(currentPageNumber) - 1)}
        // className={`p-1.5  border ${
        //   Number(currentPageNumber) === 1
        //     ? "text-gray-400 border-gray-200 cursor-not-allowed "
        //     : "bg-primary text-white hover:bg-primary hover:text-white transition-all duration-500 hover:border-transparent"
        // }`}
      >
        <ChevronLeft size={17} />
      </Button>
      {/* Page Numbers */}
      {generatePages().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <Button size={"sm"} className="px-3 py-1 text-gray-500">
              ...
            </Button>
          ) : (
            <Button
              size={"sm"}
              variant={"outline"}
              onClick={() => handlePageChange(Number(page))}
              // className={cn(
              //   "px-3 py-1  border max-w-max text-sm  text-primary bg-transparent border-primary hover:bg-primary hover:text-white transition-all duration-500 hover:border-soft_primary cursor-pointer",
              //   {
              //     "bg-primary border-soft_primary text-white ":
              //       Number(page) === Number(currentPageNumber),
              //   }
              // )}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}
      {/* Next ButtonButton */}
      <Button
        size={"sm"}
        disabled={Number(currentPageNumber) === totalPages}
        onClick={() => handlePageChange(Number(currentPageNumber) + 1)}
        // className={`p-1.5  border ${
        //   Number(currentPageNumber) === totalPages
        //     ? "text-gray-400 border-gray-200 cursor-not-allowed  "
        //     : "bg-primary text-white  transition-all duration-500 hover:border-transparent"
        // }`}
      >
        <ChevronRight size={17} />
      </Button>
    </div>
  );
};

export default PaginatedComponent;
