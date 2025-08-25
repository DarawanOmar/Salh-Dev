"use server";

import { EndPoints } from "@/lib/routes/EndPoints";
import { apiRequest } from "@/lib/utils/axiosHandler";

export const SeenNotificationAction = async (id: string) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.notification.seen(id),
  });
  return result;
};
