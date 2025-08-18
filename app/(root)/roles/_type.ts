import { z } from "zod";

export const addRole = z.object({
  name: z.string(),
});

export type addRoleType = z.infer<typeof addRole>;

export interface Role {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
