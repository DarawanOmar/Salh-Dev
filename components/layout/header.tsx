import React from "react";
import UserView from "@/components/layout/user-view";
import BttonModeVibe from "@/components/layout/button-mode-vibe";
import { SidebarTrigger } from "@/components/ui/sidebar";
import NotificationSheet from "../notification";

function Header() {
  return (
    <div className="w-full flex  justify-between items-center gap-5 mt-2">
      <div className="flex gap-3 items-center">
        <div className="flex lg:hidden ">
          <SidebarTrigger />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 md:gap10 items-center">
        <BttonModeVibe />
        <NotificationSheet />
        <UserView />
      </div>
    </div>
  );
}

export default Header;
