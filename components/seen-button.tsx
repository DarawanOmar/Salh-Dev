"use client";
import { SeenNotificationAction } from "@/app/(root)/dashboard/_action";
import { cn } from "@/lib/utils";
import { Notification } from "@/public/icons";
import React from "react";
import ReusableToolTip from "./reusable/reusable-tooltip";
import LoadingSpinner from "./reusable/loadingSpinner";

type Props = {
  seen: boolean;
  id: string;
};

function SeenButton({ seen, id }: Props) {
  const [pending, startTransition] = React.useTransition();
  const handleSeen = async () => {
    startTransition(async () => {
      await SeenNotificationAction(id);
    });
  };
  return (
    <ReusableToolTip label="وەک خــوێندنــەوە دیــاری بـکە">
      <button
        disabled={pending}
        onClick={handleSeen}
        className="text-primary relative cursor-pointer"
      >
        <div
          className={cn(
            " size-2 rounded-full bg-red-500 animate-pulse absolute -top-1 left-0",
            {
              hidden: seen,
            }
          )}
        />
        {pending ? <LoadingSpinner /> : <Notification height={15} width={15} />}
      </button>
    </ReusableToolTip>
  );
}

export default SeenButton;
