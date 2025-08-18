import { z } from "zod";

export const addRecivedMoney = z.object({
  amount: z.string(),
  currencyType: z.string().optional(),
  note: z.string().optional(),
  charitableId: z.string().optional(),
  userId: z.string().optional(),
  safeId: z.string().optional(),
});

export type addRecivedMoneyType = z.infer<typeof addRecivedMoney>;

export interface RecivedMoney {
  id: string;
  amount: string;
  currencyType: string;
  note?: string;
  charitableId?: string;
  userId?: string;
  safeId?: string;
  createdAt: string;
  updatedAt: string;
}
