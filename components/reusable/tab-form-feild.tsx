import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import React, { useEffect } from "react";

interface CustomTabsFieldProps {
  control: any;
  name: string;
  label: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  className?: string;
  classTrigger?: string;
  isSearchQuery?: boolean;
}

export const TabFormFeild = ({
  control,
  name,
  label,
  defaultValue,
  options,
  className = "",
  classTrigger,
  isSearchQuery = false,
}: CustomTabsFieldProps) => {
  const [urlValue, setUrlValue] = useQueryState(name, {
    shallow: false,
    clearOnDefault: true,
    defaultValue: defaultValue as string,
  });

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        useEffect(() => {
          if (isSearchQuery && urlValue) {
            field.onChange(urlValue);
          }
          // Set the initial value from defaultValue if field.value is empty
          if (!field.value && defaultValue) {
            field.onChange(defaultValue);
          }
        }, [defaultValue]);

        return (
          <FormItem className={`w-full`}>
            <FormLabel className="text-text-head">{label}</FormLabel>
            <FormControl>
              <Tabs
                value={field.value || urlValue || defaultValue || ""}
                onValueChange={(newValue) => {
                  field.onChange(newValue);
                  if (isSearchQuery) {
                    setUrlValue(newValue);
                  }
                }}
                defaultValue={defaultValue}
              >
                <TabsList className={cn("w-full border h-11", className)}>
                  {options.map((option) => (
                    <TabsTrigger
                      key={option.value}
                      value={option.value}
                      className={cn(
                        "py-2 w-1/2 data-[state=active]:bg-primary data-[state=active]:text-white",
                        classTrigger
                      )}
                    >
                      {option.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
