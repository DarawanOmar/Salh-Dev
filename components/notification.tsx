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

function NotificationSheet() {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="p-5 rounded-md border space-y-2" key={index}>
            <div className="flex justify-between items-center">
              <p>صــاڵـــح مــحــمــد</p>
              <p className="text-primary">
                <Notification height={15} width={15} />
              </p>
            </div>
            <p className="text-muted-foreground text-xs">
              بەروای داخڵکردنی بەسەرچوو
            </p>
            <p className="text-xs text-muted-foreground max-w-max ms-auto">
              {new Date().toLocaleString()}
            </p>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
}

export default NotificationSheet;
