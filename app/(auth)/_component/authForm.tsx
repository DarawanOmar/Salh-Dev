"use client";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaType } from "./lib";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "../_actions";
import { toast } from "sonner";
import { login } from "@/lib/utils/cookies";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed } from "lucide-react";

export default function AuthForm() {
  const [pendding, startTransition] = useTransition();
  const [showPassword, setShowPassword] = React.useState(false);
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin",
    },
  });
  async function onSubmit(values: loginSchemaType) {
    startTransition(async () => {
      const res = await loginAction(values);
      if (res?.success && res.data) {
        toast.success(res.message);
        const token = res.data.token;
        const redirect = res.data.redirectTo;
        login(token, redirect);
      } else {
        toast.error(res?.message?.toString(), {
          cancel: {
            label: "Close",
            onClick: () => toast.dismiss(),
          },
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-[40px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[14px]">ناونیشانی ئیمەیڵ</FormLabel>
              <FormControl>
                <Input placeholder="ناونیشانی ئیمەیڵ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-[14px]">وشەیی نهێنی</FormLabel>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="وشەیی نهێنی"
                  {...field}
                />
              </FormControl>
              <button
                type="button"
                className="absolute end-2 top-12 transform -translate-y-1/2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
              </button>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full py-6" disabled={pendding}>
          {pendding ? "چوونەژوورەوە..." : "چوونەژوورەوە"}
        </Button>
      </form>
    </Form>
  );
}
