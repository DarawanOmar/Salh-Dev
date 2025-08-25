"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";

export const deleteUserAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.user.delete(id),
  });
  console.log("URL => ", EndPoints.user.delete(id));
  console.log("Result => ", result);
  return result;
};
