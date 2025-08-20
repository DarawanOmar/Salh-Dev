"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { addUserType } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";
import { dataFilteredSend } from "@/lib/utils";

export const addUserAction = async (data: addUserType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.user.add,
    data,
  });
  console.log("URL => ", EndPoints.user.add);
  console.log("object", result);
  return result;
};
export const updateUserAction = async (id: string, data: addUserType) => {
  const dataFiltered = dataFilteredSend(data);
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.user.update(id),
    data: dataFiltered,
  });
  console.log("data", data);
  console.log("URL => ", EndPoints.user.update(id));
  console.log("Result => ", result);
  return result;
};
export const deleteUserAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.user.delete(id),
  });
  console.log("URL => ", EndPoints.user.delete(id));
  console.log("Result => ", result);
  return result;
};
