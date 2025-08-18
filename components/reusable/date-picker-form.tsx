import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  control: any;
  name: string;
  label: string;
  disabledDates?: (date: Date) => boolean;
  className?: string;
  classLabel?: string;
}

export const DatePickerForm: React.FC<DatePickerProps> = ({
  control,
  name,
  label,
  disabledDates,
  className,
  classLabel,
}) => {
  // Helper function to normalize date to avoid timezone issues
  const normalizeDate = (date: Date | undefined) => {
    if (!date) return undefined;

    // Create a new date at noon in local timezone to avoid UTC conversion issues
    const normalizedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      12, // Set to noon to avoid DST issues
      0,
      0,
      0
    );
    return normalizedDate;
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", className)}>
          {label && (
            <FormLabel className={cn(" ", classLabel)}>{label}</FormLabel>
          )}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 h-10 text-softGray bg-white dark:bg-white/5 dark:border font-normal flex items-center justify-between",
                    !field.value && "text-muted-foreground",
                    className
                  )}
                >
                  {field.value ? (
                    // Format with local timezone to avoid UTC conversion
                    format(new Date(field.value), "PPP")
                  ) : (
                    <span>بەروار هەڵبژێرە</span>
                  )}
                  <CalendarIcon className=" h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                dir="ltr"
                mode="single"
                captionLayout="dropdown"
                selected={field.value ? new Date(field.value) : undefined}
                onSelect={(date) => {
                  if (date) {
                    // Normalize the selected date to avoid timezone issues
                    const normalizedDate = normalizeDate(date);
                    field.onChange(normalizedDate);
                  } else {
                    field.onChange(undefined);
                  }
                }}
                disabled={disabledDates}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
