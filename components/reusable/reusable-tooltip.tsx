import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProps } from "@radix-ui/react-tooltip";

import React from "react";

interface Props extends TooltipProps {
  children?: React.ReactNode;
  label: string;
}

function ReusableToolTip({ label, children, ...props }: Props) {
  return (
    <Tooltip {...props}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className="max-w-[200px] p-0">
        <div className="text-center text-xs text-mutedforeground leading-5 bg-primary/10 text-white p-2">
          {label}
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

export default ReusableToolTip;
