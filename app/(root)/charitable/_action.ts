"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { addCharitableType } from "./_type";

export const addCharitableAction = async (data: addCharitableType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.charitable.add,
    data,
  });
  console.log("URL => ", EndPoints.charitable.add);
  console.log("object", result);
  return result;
};
export const updateCharitableAction = async (
  id: string,
  data: addCharitableType
) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.charitable.update(id),
    data,
  });
  return result;
};
export const deleteCharitableAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.charitable.delete(id),
  });
  return result;
};
