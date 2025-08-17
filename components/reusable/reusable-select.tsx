import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import React from "react";

interface SelectFormFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  isForm?: boolean;
  isLabel?: boolean;
  className?: string;
  isSearchQuery?: boolean;
  classLabel?: string;
  classContent?: string;
  classFormItem?: string;
  isError?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  emptyOptionText?: string;
}

export const SelectFormField: React.FC<SelectFormFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  options,
  defaultValue,
  isForm = false,
  isLabel = true,
  className = "w-full",
  isSearchQuery,
  classLabel,
  classContent,
  classFormItem,
  emptyOptionText,
  isError,
  isLoading,
  disabled = false,
}) => {
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
        React.useEffect(() => {
          if (isSearchQuery && urlValue) {
            field.onChange(urlValue);
          }
          if (!field.value && defaultValue) {
            field.onChange(defaultValue);
          }
        }, [defaultValue]);

        return (
          <FormItem className={`${classFormItem}`}>
            {isLabel && (
              <FormLabel className={cn("", classLabel)}>{label}</FormLabel>
            )}
            <Select
              dir="rtl"
              onValueChange={(newValue) => {
                field.onChange(newValue);
                if (isSearchQuery) {
                  setUrlValue(newValue);
                }
              }}
              disabled={disabled}
              value={field.value || urlValue || defaultValue || ""}
            >
              <FormControl>
                <SelectTrigger
                  className={cn(
                    "rounded-md",

                    className
                  )}
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className={cn("", classContent)}>
                {isLoading ? (
                  <SelectItem value="loading" disabled>
                    Loading...
                  </SelectItem>
                ) : options.length === 0 ? (
                  <SelectItem value="0" disabled>
                    {emptyOptionText || "No options available"}{" "}
                  </SelectItem>
                ) : (
                  options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
            <FormMessage />
            {isError && (
              <p className="text-red-500">
                {`Please select a valid ${label.toLowerCase()}`}
              </p>
            )}
          </FormItem>
        );
      }}
    />
  );
};
