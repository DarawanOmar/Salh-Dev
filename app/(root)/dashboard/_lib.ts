import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";

export const getDashboardData = async () => {
  const result = await apiRequest<any[]>({
    method: "GET",
    url: EndPoints.dashboard,
  });
  return result;
};
