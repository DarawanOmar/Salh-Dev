"use client";

import React from "react";
import { Plus } from "lucide-react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import AddGivenForm from "./add-given-money";

function ModalAddGiven() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      classContent="max-w-4xl"
      icon={<Plus size={20} strokeWidth={2.5} className="max-sm:hidden" />}
      text_button="زیادکردنی پــارەی دەرچــوو"
      title="زیادکردنی پــارەی دەرچــوو"
    >
      <AddGivenForm handleClose={handleClose} />
    </CustomDialog>
  );
}

export default ModalAddGiven;
