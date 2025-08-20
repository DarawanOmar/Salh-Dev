"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { addRoleType } from "./_type";

export const addRoleAction = async (data: addRoleType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.recived_money.add,
    data,
  });
  console.log("URL => ", EndPoints.recived_money.add);
  console.log("object", result);
  return result;
};
export const updateRoleAction = async (id: string, data: addRoleType) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.recived_money.update(id),
    data,
  });
  return result;
};
export const deleteRoleAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.recived_money.delete(id),
  });
  return result;
};
