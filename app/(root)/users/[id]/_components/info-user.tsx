import Image from "next/image";
import React from "react";
import placeHolder from "@/public/empty-product.webp";

import { User } from "../../_type";

type Props = {
  oneUser: User;
};

function InfoUser({ oneUser }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 border p-3 rounded-md">
      <Image
        src={oneUser?.imageUrl || placeHolder}
        alt={oneUser?.name || "User Avatar"}
        width={100}
        height={100}
        className="rounded-md size-[200px] object-cover border"
      />
      <div className="grid gap-3">
        <p>ناوی بەکارهێنەر : {oneUser?.name}</p>
        <p>ناوی تەواوی : {oneUser?.fullName}</p>
        <p>چالاکە : {oneUser?.isActive ? "بەڵێ" : "نەخێر"}</p>
        <p>دەسەڵات : {oneUser?.role?.name || "نییە"}</p>
        <p>سەرنج : {oneUser?.note || "نییە"}</p>
      </div>
    </div>
  );
}

export default InfoUser;
