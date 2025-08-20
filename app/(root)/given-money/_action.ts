"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { addGivenType } from "./_type";

export const addGivenAction = async (data: addGivenType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.money_given.add,
    data,
  });
  console.log("URL => ", EndPoints.money_given.add);
  console.log("object", result);
  return result;
};
export const updateGivenAction = async (id: string, data: addGivenType) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.money_given.update(id),
    data,
  });
  return result;
};
export const deleteGivenAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.money_given.delete(id),
  });
  return result;
};
