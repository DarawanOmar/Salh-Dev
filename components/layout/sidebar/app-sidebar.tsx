"use client";
import * as React from "react";
import { NavMain } from "./nav-main";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

import { Menu } from "lucide-react";
import { dataSidebar } from "./constants";

export function AppSidebar({
  session,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  session?: any;
}) {
  const { toggleSidebar } = useSidebar();
  const [_, roles] = session?.token?.split(",between,");
  // const permissions = JSON?.parse(roles) as string[];
  const links = dataSidebar([]);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="relative">
        <div className="absolute top-14 end-0 md:-end-0 rounded-md cursor-pointer  hover:text-primary transition-all duration-300">
          <Menu onClick={toggleSidebar} size={20} />
        </div>
        <TeamSwitcher isHead />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={links.projects} />
      </SidebarContent>
      <TeamSwitcher isHead={false} />
    </Sidebar>
  );
}
