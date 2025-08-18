import { z } from "zod";

export const addGiven = z.object({
  amount: z.string(),
  currencyType: z.string().optional(),
  transactionType: z.string().optional(),
  note: z.string().optional(),
  headMemberId: z.string().optional(),
  userId: z.string().optional(),
  safeId: z.string().optional(),
});

export type addGivenType = z.infer<typeof addGiven>;

export interface Given {
  id: string;
  amount: string;
  currencyType: string;
  transactionType: string;
  note?: string;
  headMemberId?: string;
  userId?: string;
  safeId?: string;
  createdAt: string;
  updatedAt: string;
}
