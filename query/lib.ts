import { EndPoints } from "@/lib/routes/EndPoints";
import { apiRequest } from "@/lib/utils/axiosHandler";
import { Role } from "./type";

export const getAllRoles = async () => {
  const result = await apiRequest<Role[]>({
    method: "GET",
    url: EndPoints.role.get,
  });
  return result;
};
