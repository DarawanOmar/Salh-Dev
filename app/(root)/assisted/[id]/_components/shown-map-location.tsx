"use client";
import React from "react";
import dynamic from "next/dynamic";
import CustomDialog from "@/components/reusable/resusable-dialog";

// Dynamic import for Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import("../../edit-add/_components/map"), {
  ssr: false,
  loading: () => (
    <div className="h-[32vh] w-full bg-gray-100 rounded-[20px] flex items-center justify-center">
      Loading Map...
    </div>
  ),
});

type Props = {
  lant: number;
  long: number;
};

const ShownMapLocation = ({ lant, long }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <CustomDialog
      title="نەخشە"
      open={open}
      onOpenChange={setOpen}
      text_button="بینین لەسەر نەخشە"
    >
      <Map lant={lant} long={long} readOnly={true} />
    </CustomDialog>
  );
};

export default ShownMapLocation;
