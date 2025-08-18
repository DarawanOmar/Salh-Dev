"use client";
import React from "react";
import Map from "../../edit-add/_components/map";
import CustomDialog from "@/components/reusable/resusable-dialog";

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
