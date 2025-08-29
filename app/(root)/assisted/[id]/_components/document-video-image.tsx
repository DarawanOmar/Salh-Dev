import React from "react";
import { Assisted } from "../../_type";
import { MdArrowBackIosNew } from "react-icons/md";
import Image from "next/image";
import Placeholser from "@/public/empty-product.webp";
import ModalAddImageHouse from "./form/home/modal-add-image-house";
import ModalAddDocument from "./form/document/modal-document";
import ModalAddVideo from "./form/video/modal-add-video";
import Link from "next/link";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import ReusableDeleteDailog from "@/components/reusable/reusable-delete-dialog";
import {
  deleteDocumentAction,
  deleteHouseImageAction,
  deleteVideoAction,
} from "../../_action";
import { X } from "lucide-react";

type DocumentVideoImageProps = {
  videos: Assisted["videos"][number][];
  Documents: Assisted["Documents"][number][];
  houseDescription: Assisted["houseImages"][number][];
  isQrcodePage?: boolean;
};

function DocumentVideoImage({
  houseDescription,
  Documents,
  videos,
  isQrcodePage = false,
}: DocumentVideoImageProps) {
  return (
    <div className="flex flex-col space-y-10">
      {/* Images List */}
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <Bumcrumb
            link={"/assisted"}
            source={"هــاوکــاریــکــراون"}
            destination={"وێنەی ناومــاڵ"}
          />
          {isQrcodePage ? null : <ModalAddImageHouse />}
        </div>
        <div className="my-10 flex items-center overflow-x-auto snap-x gap-5 w-full">
          {houseDescription.map((house) => (
            <div
              key={house.id}
              className="relative flex-shrink-0 w-64 h-64 snap-center"
            >
              <Image
                src={house.url || Placeholser}
                alt="image"
                height={200}
                width={200}
                className="object-cover rounded-md w-full h-full"
              />
              <ReusableDeleteDailog
                id={house.id}
                actionDelete={deleteHouseImageAction}
                isFreshButtonPass
                button={
                  <button className="absolute top-0 end-0 size-7 rounded-full flex justify-center items-center bg-red-50 text-red-500 cursor-pointer">
                    <X size={16} />
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </div>
      {/* Documents List */}
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <Bumcrumb
            link={"/assisted"}
            source={"هــاوکــاریــکــراون"}
            destination={"وێنەی بــەڵــگـەنامە"}
          />
          {isQrcodePage ? null : <ModalAddDocument />}
        </div>
        <div className="my-10 flex items-center overflow-x-auto snap-x gap-5 w-full">
          {Documents.map((doc) => (
            <div
              className="relative flex-shrink-0 w-64 h-64 snap-center"
              key={doc.id}
            >
              <Image
                src={doc.url || Placeholser}
                alt="image"
                height={200}
                width={200}
                className="object-cover rounded-md w-full h-64"
              />
              <ReusableDeleteDailog
                id={doc.id}
                actionDelete={deleteDocumentAction}
                isFreshButtonPass
                button={
                  <button className="absolute top-0 end-0 size-7 rounded-full flex justify-center items-center bg-red-50 text-red-500 cursor-pointer">
                    <X size={16} />
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </div>
      {/* Video List */}
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <Bumcrumb
            link={"/assisted"}
            source={"هــاوکــاریــکــراون"}
            destination={"فــیــدۆیــەکان"}
          />
          {isQrcodePage ? null : <ModalAddVideo />}
        </div>
        <div className="my-10 flex items-center overflow-x-auto snap-x gap-5 w-full">
          {videos.map((video) => (
            <div
              className="relative flex-shrink-0 w-64 h-64 snap-center"
              key={video.id}
            >
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc={video.url}
                thumbnailSrc={Placeholser.src}
                thumbnailAlt="Dummy Video Thumbnail"
              />
              <ReusableDeleteDailog
                id={video.id}
                actionDelete={deleteVideoAction}
                isFreshButtonPass
                button={
                  <button className="absolute top-0 end-0 size-7 rounded-full flex justify-center items-center bg-red-50 text-red-500 cursor-pointer">
                    <X size={16} />
                  </button>
                }
              />
            </div>
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
