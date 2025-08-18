import { z } from "zod";

export const addIncomeRevenue = z.object({
  amount: z.string(),
  currencyType: z.string().optional(),
  note: z.string().optional(),
  charitableId: z.string().optional(),
  userId: z.string().optional(),
  safeId: z.string().optional(),
});

export type addIncomeRevenueType = z.infer<typeof addIncomeRevenue>;

export interface IncomeRevenue {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  description: string;
}
