import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import { Button } from "./ui/button";
import { Notification } from "@/public/icons";
import { getNotifications } from "@/app/(root)/dashboard/_lib";
import { format } from "date-fns";
import SeenButton from "./seen-button";

async function NotificationSheet() {
  const notifications = await getNotifications();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Notification height={25} width={25} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-2 overflow-scroll">
        <SheetHeader className="sticky top-0 bg-background">
          <SheetTitle>ئــاگـەداریـیـەکـانـی سـیـسـتـەم</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {notifications.data?.length === 0 ? (
          <div className="max-w-full mx-auto px-5">
            <h1 className="my-10 text-muted-foreground">
              هــیــچ ئــاگـەدارکـردنەوەیەک نــیــە
            </h1>
          </div>
        ) : (
          notifications?.data?.map((notification, index) => (
            <div
              className="p-5 rounded-md border space-y-2 dark:border-muted"
              key={index}
            >
              <div className="flex justify-between items-center">
                <p>{notification.headMember.fullName}</p>
                <SeenButton id={notification.id} seen={notification.seen} />
              </div>
              <p className="text-muted-foreground text-xs">
                {notification.description}
              </p>
              <p
                dir="ltr"
                className="text-xs text-muted-foreground max-w-max ms-auto"
              >
                {format(
                  notification.createdAt || new Date(),
                  "yyyy-MM-dd / HH:mm aa"
                )}
              </p>
            </div>
          ))
        )}
      </SheetContent>
    </Sheet>
  );
}

export default NotificationSheet;
