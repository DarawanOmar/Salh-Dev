"use client";

import * as React from "react";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import logo from "@/public/logo.png";
import { logout } from "@/lib/utils/cookies";
import { LuLoaderCircle } from "react-icons/lu";

export function TeamSwitcher({ isHead }: { isHead: boolean }) {
  const { open } = useSidebar();
  const [pendding, startTransition] = React.useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      logout();
    });
  };

  return isHead ? (
    <>
      <div className="flex justify-center items-center my-5">
        <div className="flex  gap-3 items-center">
          <Image
            src={logo}
            alt="Logo-Restaurant"
            height={35}
            width={35}
            className={cn(" object-cover mx-auto h-[45px] w-full ", {
              "size-[25px]": !open,
            })}
          />
        </div>
      </div>
    </>
  ) : (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-primary data-[state=open]:text-sidebar-accent-foreground flex items-center "
    >
      <div
        className={cn(
          "flex aspect-square h-[36px] w-[36px] items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground",
          {
            "size-8": !open,
          }
        )}
      >
        <Image
          src={logo}
          alt="Avana-Soft"
          height={300}
          width={300}
          quality={100}
          className="rounded-full object-cover size-12"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-start">Admin</span>
        <span>admin@gmail.com</span>
      </div>
      <div onClick={handleSignOut} className="mr-auto">
        {pendding ? (
          <LuLoaderCircle className="animate-spin transition-all duration-500" />
        ) : (
          <LogOutIcon
            className="rotate-180 hover:text-destructive cursor-pointer"
            height={16}
          />
        )}
      </div>
    </SidebarMenuButton>
  );
}
