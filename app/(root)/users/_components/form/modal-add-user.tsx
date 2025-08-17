"use client";

import React from "react";
import { Plus } from "lucide-react";
import AddUser from "./add-user";
import CustomDialog from "@/components/reusable/resusable-dialog";

function ModalAddUser() {
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
      text_button="زیادکردنی بەکارهێنەر"
      title="زیادکردنی بەکارهێنەر"
    >
      <AddUser handleClose={handleClose} />
    </CustomDialog>
  );
}

export default ModalAddUser;
