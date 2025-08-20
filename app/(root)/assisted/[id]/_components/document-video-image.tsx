import React from "react";
import { Assisted } from "../../_type";
import { MdArrowBackIosNew } from "react-icons/md";
import Image from "next/image";
import Placeholser from "@/public/empty-product.webp";
import ModalAddImageHouse from "./form/home/modal-add-image-house";
import ModalAddDocument from "./form/document/modal-document";
import ModalAddVideo from "./form/video/modal-add-video";
import Link from "next/link";

type DocumentVideoImageProps = {
  video: Assisted["Videos"][number][];
  image: Assisted["Documents"][number][];
  houseDescription: Assisted["HouseDescription"][number][];
};

function DocumentVideoImage({
  houseDescription,
  image,
  video,
}: DocumentVideoImageProps) {
  return (
    <div className="flex flex-col space-y-10">
      {/* Images List */}
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Bumcrumb
            link={"/assisted"}
            source={"هــاوکــاریــکــراون"}
            destination={"وێنەی ناومــاڵ"}
          />
          <ModalAddImageHouse />
        </div>
        <div className="my-10 flex items-center overflow-x-auto snap-x gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              src={Placeholser}
              alt="image"
              height={200}
              width={200}
              className="object-cover rounded-md w-full h-64"
            />
          ))}
        </div>
      </div>
      {/* Documents List */}
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Bumcrumb
            link={"/assisted"}
            source={"هــاوکــاریــکــراون"}
            destination={"وێنەی بــەڵــگـەنامە"}
          />
          <ModalAddDocument />
        </div>
        <div className="my-10 flex items-center overflow-x-auto snap-x gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              src={Placeholser}
              alt="image"
              height={200}
              width={200}
              className="object-cover rounded-md w-full h-64"
            />
          ))}
        </div>
      </div>
      {/* Video List */}
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Bumcrumb
            link={"/assisted"}
            source={"هــاوکــاریــکــراون"}
            destination={"فــیــدۆیــەکان"}
          />
          <ModalAddVideo />
        </div>
        <div className="my-10 flex items-center overflow-x-auto snap-x gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              src={Placeholser}
              alt="image"
              height={200}
              width={200}
              className="object-cover rounded-md w-full h-64"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocumentVideoImage;

const Bumcrumb = ({
  destination,
  link,
  source,
}: {
  link: string;
  source: string;
  destination: string;
}) => {
  return (
    <div className="flex flex-row items-center gap-3 my-5">
      <Link href={link} className="hover:underline hover:text-primary">
        {source}
      </Link>
      <MdArrowBackIosNew />
      <h1>{destination}</h1>
    </div>
  );
};
