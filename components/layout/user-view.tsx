"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/sign-in.png";
import { useGetProfile } from "@/hooks/use-fetch-queries";
import { Skeleton } from "../ui/skeleton";
function UserView() {
  const { data, isLoading } = useGetProfile();

  return (
    <div className="flex gap-3 items-center ">
      {isLoading ? (
        <Skeleton className="size-10" />
      ) : (
        <Image
          src={data?.data?.imageUrl || logo}
          alt={"Admin"}
          width={35}
          height={35}
          className="rounded object-cover size-[35px]"
        />
      )}
      <div className="flex flex-col ">
        {isLoading ? (
          <Skeleton className="w-16 h-4 mt-1" />
        ) : (
          <p className="h-5">{data?.data?.fullName || "-"}</p>
        )}
        {isLoading ? (
          <Skeleton className="w-20 h-3 mt-2" />
        ) : (
          <p>{data?.data?.role?.name || "-"}</p>
        )}
      </div>
      {/* )} */}
    </div>
  );
}

export default UserView;
