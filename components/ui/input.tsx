import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  classParent,
  Icon,
  sizeIcon,
  ...props
}: React.ComponentProps<"input"> & {
  Icon?: React.ElementType;
  sizeIcon?: number;
  classParent?: string;
}) {
  return (
    <div className={cn("relative wfull", classParent)}>
      {Icon && (
        <span className="absolute start-2 inset-y-0 flex items-center">
          <Icon
            size={sizeIcon}
            className={cn("text-primary ms-1", {
              "size-7": type === "file",
            })}
          />
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[1px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          {
            "ps-10": Icon,
          },
          className
        )}
        {...props}
        value={props.value === 0 ? "" : props.value}
        onChange={(e) => {
          if (type === "number" && props.onChange) {
            props.onChange({
              target: { value: +e.target.valueAsNumber },
            } as any);
          } else {
            props.onChange && props.onChange(e);
          }
        }}
      />
    </div>
  );
}

export { Input };
