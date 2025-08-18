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
import {
  Assisted,
  Backup,
  Committee,
  Dashboard,
  IncomeRevenue,
  OutGoRevenue,
  Report,
  Roles,
  User,
  Charitable,
} from "@/public/icons";
import { Menu } from "lucide-react";

export function AppSidebar({
  session,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  session?: any;
}) {
  const { toggleSidebar } = useSidebar();
  const [_, roles] = session?.token?.split(",between,");
  // const permissions = JSON?.parse(roles) as string[];
  const links = data([]);
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
const data = (permissions: string[]) => {
  return {
    projects: [
      {
        title: "داشـــبــۆڕد",
        url: "/dashboard",
        icon: Dashboard,
        isActive: permissions.includes("dashboard"),
      },
      {
        title: "بــەکـاهێنەرەکان",
        url: "/users",
        icon: User,
        isActive: permissions.includes("users"),
      },
      {
        title: "لــیــژنــەکــان",
        url: "/committee",
        icon: Committee,
        isActive: permissions.includes("committee"),
      },
      {
        title: "هــاوکـــاری کــراون",
        url: "/assisted",
        icon: Assisted,
        isActive: permissions.includes("assisted"),
      },
      {
        title: "دەســــەڵاتــەکــان",
        url: "/roles",
        icon: Roles,
        isActive: permissions.includes("roles"),
      },
      {
        title: "خـــاوەنـــپــارەکان",
        url: "/owner-money",
        icon: Roles,
        isActive: permissions.includes("owner-money"),
      },
      {
        title: "خــێـــرخــواز",
        url: "/charitable",
        icon: Charitable,
        isActive: permissions.includes("charitable"),
      },
      {
        title: "پـــارەی هـــاتوو",
        url: "/recived-money",
        icon: IncomeRevenue,
        isActive: permissions.includes("recived-money"),
      },
      {
        title: "پـــارەی دەچـــوو",
        url: "/given-money",
        icon: OutGoRevenue,
        isActive: permissions.includes("given-money"),
      },
      {
        title: "ڕاپـــۆرت",
        url: "/report",
        icon: Report,
        isActive: permissions.includes("report"),
      },
      {
        title: "پـــاشــەکــەوتــکــردن",
        url: "/backup",
        icon: Backup,
        isActive: permissions.includes("backup"),
      },
    ],
    // ].filter((item) => item.isActive),
  };
};
