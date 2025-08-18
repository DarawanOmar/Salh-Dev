"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";

export const deleteCommitteeAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.commitee.delete(id),
  });
  return result;
};
