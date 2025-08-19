import React from "react";
import Link from "next/link";
import { Notification } from "@/public/icons";
import UserView from "@/components/layout/user-view";
import { Button } from "@/components/ui/button";
import BttonModeVibe from "@/components/layout/button-mode-vibe";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
        <Link href={"/notifications"}>
          <Button>
            <Notification height={25} width={25} />
          </Button>
        </Link>
        <UserView />
      </div>
    </div>
  );
}

export default Header;
