"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { addRoleType } from "./_type";

export const addRoleAction = async (data: addRoleType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.income_revenue.add,
    data,
  });
  console.log("URL => ", EndPoints.income_revenue.add);
  console.log("object", result);
  return result;
};
export const updateRoleAction = async (id: string, data: addRoleType) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.income_revenue.update(id),
    data,
  });
  return result;
};
export const deleteRoleAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.income_revenue.delete(id),
  });
  return result;
};
