"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { addUserType } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const addUserAction = async (data: addUserType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.user.add,
    data,
  });
  return result;
};
export const updateUserAction = async (id: string, data: addUserType) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.user.update(id),
    data,
  });
  return result;
};
export const deleteUserAction = async (id: number) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.user.delete(id),
  });
  return result;
};
