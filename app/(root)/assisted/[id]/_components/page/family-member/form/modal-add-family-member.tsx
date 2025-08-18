"use client";

import React from "react";
import { Plus } from "lucide-react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import AddFamilyMemberForm from "./add-family-member";

function ModalAddFamilyMember() {
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
      text_button="زیادکردنی ئــەندامــانی خێزان"
      title="زیادکردنی ئــەندامــانی خێزان"
    >
      <AddFamilyMemberForm handleClose={handleClose} />
    </CustomDialog>
  );
}

export default ModalAddFamilyMember;
