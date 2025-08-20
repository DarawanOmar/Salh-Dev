import { z } from "zod";
import { Assisted, AssistedOnly } from "../assisted/_type";
import { User } from "../users/_type";

export const addGiven = z.object({
  amount: z.number(),
  currencyType: z.string().optional(),
  transactionType: z.string().optional(),
  note: z.string().optional(),
  headMemberId: z.string().optional(),
  userId: z.string().optional(),
  safeId: z.string().optional(),
  documentIssue: z.string().optional(),
  givenAt: z.date().optional(),
});

export type addGivenType = z.infer<typeof addGiven>;

export interface Given {
  id: string;
  amount: string;
  currencyType: string;
  documentIssue: string;
  transactionType: string;
  note: string;
  headMemberId: string;
  userId: string;
  safeId: string;
  givenAt: Date;
  headMember: AssistedOnly;
  user: User;
}
