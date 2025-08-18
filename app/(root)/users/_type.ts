import { z } from "zod";

export const addUser = z.object({
  name: z.string().min(1, { message: "ناو داخڵ بکە" }),
  fullName: z.string().min(1, { message: "ناوی تەواو داخڵ بکە" }),
  phone: z.string().min(1, { message: "ژمارەی مۆبایل داخڵ بکە" }),
  address: z.string().min(1, { message: "ناونیشانی داخڵ بکە" }),
  note: z.string().min(1, { message: "تێبینی داخڵ بکە" }),
  email: z
    .string()
    .email({ message: "شێوەی ئیمەیڵی نییە" })
    .min(1, { message: "تێبینی داخڵ بکە" }),
  password: z.string().optional(),
  roleId: z.string().min(1, { message: "نیشانی ڕوڵ داخڵ بکە" }),
});

export type addUserType = z.infer<typeof addUser>;

export interface User {
  id: string;
  email: string;
  name: string;
  fullName: string;
  phone: string;
  address: string;
  isActive: boolean;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  note: string;
  roleId: string;
  role: {
    id: string;
    name: string;
  };
  MoneyGiven: MoneyGiven[];
  MoneyReceived: MoneyReceived[];
}
export interface MoneyReceived {
  id: string;
  documentIssue: string;
  insertedAt: Date;
  amount: string;
  currencyType: string;
  note: string;
  charitableId: string;
  userId: string;
  safeId: string;
}
export interface MoneyGiven {
  id: string;
  documentIssue: string;
  givenAt: Date;
  amount: string;
  currencyType: string;
  transactionType: string;
  note: string;
  headMemberId: string;
  userId: string;
  safeId: string;
}
