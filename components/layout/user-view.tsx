import Image from "next/image";
import React from "react";
import logo from "@/public/sign-in.png";
async function UserView() {
  // const user = await getCurrentUser();

  return (
    <div className="flex gap-3 items-center ">
      {/* {isLoading ? (
        <Skeleton className="w-10 h-3" />
      ) : ( */}
      <Image
        src={logo}
        alt={"Admin"}
        width={35}
        height={35}
        className="rounded object-cover size-[35px]"
      />
      <div className="flex flex-col ">
        <p className="h-5">ئەدمــیــن</p>
        <p>بـەڕێــوەبــەر</p>
      </div>
      {/* )} */}
    </div>
  );
}

export default UserView;
