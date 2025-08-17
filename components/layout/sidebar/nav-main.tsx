"use client";

import { LogOut, LucideLoaderCircle, type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { logout } from "@/lib/utils/cookies";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | React.ElementType;
    isActive?: boolean;
  }[];
}) {
  const { isMobile, setOpenMobile } = useSidebar();
  const pathName = usePathname();
  const [pendding, startTransition] = React.useTransition();
  const handleSignOut = () => {
    startTransition(async () => {
      logout();
    });
  };
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Link href={`${item.url}`} key={item.title}>
            <SidebarMenuButton
              key={item.title}
              tooltip={item.title}
              onClick={() => {
                if (isMobile) setOpenMobile(false);
              }}
              className={cn(
                "py[18px]  text-text hover:text-white hover:bg-primary  transition-all duration-500 text-[15px] cursor-pointer my-[1px] ",
                {
                  "text-white bg-primary  ": pathName.includes(item.url),
                }
              )}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </Link>
        ))}
        <SidebarMenuButton
          type="button"
          onClick={handleSignOut}
          tooltip="چوونەدەرەوە"
          className="py-[18px] text-text  hover:bg-primary hover:text-white  transition-all duration-500"
        >
          {pendding ? (
            <LucideLoaderCircle className="animate-spin transition-all duration-500" />
          ) : (
            <LogOut />
          )}

          <span className="text-[15px]"> چوونەدەرەوە</span>
        </SidebarMenuButton>
      </SidebarMenu>
    </SidebarGroup>
  );
}
