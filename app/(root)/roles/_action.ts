"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { addRoleType, TogglePermissionData } from "./_type";

export const addRoleAction = async (data: addRoleType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.role.add,
    data,
  });
  console.log("URL => ", EndPoints.role.add);
  console.log("object", result);
  return result;
};
export const updateRoleAction = async (id: string, data: addRoleType) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.role.update(id),
    data,
  });
  return result;
};
export const updatePermissionAction = async (
  permission_id: string,
  data: TogglePermissionData
) => {
  console.log("Data => ", data, "permission_id => ", permission_id);
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.role.togglePermission(permission_id),
    data,
  });
  return result;
};
export const deleteRoleAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.role.delete(id),
  });
  return result;
};
