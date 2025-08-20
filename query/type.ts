import { AssistedOnly } from "@/app/(root)/assisted/_type";

export interface Role {
  id: string;
  name: string;
}
export interface Document {
  id: string;
  description: string;
  url: string | null;
  headMemberId: string;
  headMember: AssistedOnly;
}
export interface CashSafe {
  id: string;
  name: string;
  totalDollar: string;
  totalDinar: string;
  updatedAt: Date;
  createdAt: Date;
}
