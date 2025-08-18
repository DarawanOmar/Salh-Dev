import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { Role } from "./_type";

export const getAllRole = async (page: string, search: string) => {
  const result = await apiRequest<ResponseData<Role[]>>({
    method: "GET",
    url: EndPoints.role.get(page, search),
  });
  return result;
};

export const getOneRole = async (id: string) => {
  const result = await apiRequest<Role>({
    method: "GET",
    url: EndPoints.role.getById(id),
  });
  return result;
};
