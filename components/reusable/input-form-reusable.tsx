import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TextFieldProps {
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  classFormItem?: string;
  icon?: LucideIcon | React.ElementType;
  isShown?: boolean;
  disc?: string;
  disabled?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  classFormItem,
  type = "text",
  className,
  isShown = true,
  disabled = false,
}) => {
  return isShown ? (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { invalid } }) => (
        <FormItem className={cn("", classFormItem)}>
          {label && (
            <FormLabel className="font-sirwan-light text-xs">{label}</FormLabel>
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              className={cn("border-muted-foreground/30", className, {
                "placeholder:text-red-500 border-red-500": invalid,
              })}
              {...field}
              type={type}
              disabled={disabled}
            />
          </FormControl>
        </FormItem>
      )}
    />
  ) : null;
};
