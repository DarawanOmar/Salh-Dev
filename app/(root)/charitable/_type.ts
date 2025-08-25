import { sizeImage } from "@/lib/globals";
import { z } from "zod";

export const addCharitable = z.object({
  fullName: z.string().min(1, { message: "ناو داخڵ بکە" }),
  phone: z.string().min(1, { message: "ژمارەی مۆبایل داخڵ بکە" }),
  address: z.string().min(1, { message: "ناونیشانی داخڵ بکە" }),
  description: z.string().min(1, { message: "تێبینی داخڵ بکە" }),
  imageUrl: z
    .instanceof(File) // Ensure the value is of type `File`
    .refine((file) => file.size < sizeImage, {
      message: "File size must be less than 1 MB",
    })
    .nullable(),
});

export type addCharitableType = z.infer<typeof addCharitable>;

export interface Charitable {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  description: string;
}
