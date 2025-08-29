import { z } from "zod";
import { Permission } from "../users/_type";

export const addRole = z.object({
  name: z.string(),
});

export type addRoleType = z.infer<typeof addRole>;

export interface Role {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  permissions: Permission[];
}

export type TogglePermissionData = {
  action: string;
  resource: string;
  roleId: string;
  status: boolean;
};
