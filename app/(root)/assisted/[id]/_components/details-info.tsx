import React from "react";
import { Assisted } from "../../_type";
import Image from "next/image";
import placeHolder from "@/public/empty-product.webp";
import { format } from "date-fns";
import ShownMapLocation from "./shown-map-location";

type Props = {
  oneCommittee: Assisted;
};

export const DetailInfo = ({ oneCommittee }: Props) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-5 border p-3 rounded-md">
        <Image
          src={oneCommittee?.imageUrl || placeHolder}
          alt={oneCommittee?.fullName || "User Avatar"}
          width={100}
          height={100}
          className="rounded-md size-[200px] object-cover border"
        />
        <div className="grid gap-3">
          <p>ناوی تەواو : {oneCommittee?.fullName}</p>
          <p>
            بەرواری لە دایکبوون :{" "}
            {format(
              new Date((oneCommittee?.dateOfBirth as Date) || new Date()),
              "dd/MM/yyyy"
            ) || "نییە"}
          </p>
          <p>ڕەگەز : {oneCommittee?.gender || "نییە"}</p>
          <p>کاری ئێستای : {oneCommittee?.currentJob || "نییە"}</p>
          <p>ژمارەی مۆبایل : {oneCommittee?.phoneNumber1 || "نییە"}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="border rounded-xl p-5">
          {" "}
          <div className="grid gap-3">
            <p>ژمارەی مۆبایلی دووەم : {oneCommittee?.phoneNumber2 || "نییە"}</p>
            <p>ژمارەی مۆبایلی خێزان : {oneCommittee?.phoneNumber1 || "نییە"}</p>
            <p>ناونیشانی ئێستای : {oneCommittee?.currentAddress || "نییە"}</p>
            <p>ئەو شارەی لێدەژی : {oneCommittee?.currentAddress || "نییە"}</p>
            <p>شوێنی لە دایکبوون : {oneCommittee?.placeOfBirth || "نییە"}</p>
            <p>
              بەرواری ناو تۆمارکردن :{" "}
              {format(
                new Date(
                  (oneCommittee?.dateOfRegistration as Date) || new Date()
                ),
                "dd/MM/yyyy"
              ) || "نییە"}
            </p>
          </div>
        </div>
        <div className="border rounded-xl p-5">
          {" "}
          <div className="grid gap-3">
            <p>
              بەرواری بەسەرچوون :{" "}
              {format(
                new Date((oneCommittee?.dateOfExpiry as Date) || new Date()),
                "dd/MM/yyyy"
              ) || "نییە"}
            </p>
            <p>کێشەی سەرەکی : {oneCommittee?.mainProblem || "نییە"}</p>
            <p>
              گەورەترین کێشە هەیەتی: {oneCommittee?.biggestProblem || "نییە"}
            </p>
            <p>
              مووچەکەی : {oneCommittee?.salary || "نییە"}{" "}
              {oneCommittee?.currencyType === "USD" ? "دۆلار" : "دینار"}
            </p>
            <p>
              شوێن لەسەر نەخشە :{" "}
              <ShownMapLocation
                lant={oneCommittee?.latitude || 0}
                long={oneCommittee?.longitude || 0}
              />
            </p>
            <p>سەرنج : {oneCommittee?.note || "نییە"}</p>
          </div>
        </div>
      </div>
    </>
  );
};
