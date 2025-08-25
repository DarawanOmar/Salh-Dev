"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";

export const deleteCharitableAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.charitable.delete(id),
  });
  return result;
};
