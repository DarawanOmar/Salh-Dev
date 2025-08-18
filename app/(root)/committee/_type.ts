import { sizeImage } from "@/lib/globals";
import { z } from "zod";

export const addUCommittee = z.object({
  name: z.string().min(1, { message: "ناو داخڵ بکە" }),
  phone: z.string().min(1, { message: "ژمارەی مۆبایل داخڵ بکە" }),
  address: z.string().min(1, { message: "ناونیشانی داخڵ بکە" }),
  note: z.string().min(1, { message: "تێبینی داخڵ بکە" }),
  image: z
    .instanceof(File) // Ensure the value is of type `File`
    .refine((file) => file.size < sizeImage, {
      message: "File size must be less than 1 MB",
    })
    .nullable(),
});

export type addUCommitteeType = z.infer<typeof addUCommittee>;

export interface Committee {
  id: string;
  name: string;
  phone: string;
  address: string;
  note: string;
  imageUrl: string | null;
}
