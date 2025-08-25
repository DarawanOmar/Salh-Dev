import { apiRequest } from "@/lib/utils/axiosHandler";
import { User } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const getAllUsers = async (page: string, search: string) => {
  const result = await apiRequest<ResponseData<User[]>>({
    method: "GET",
    url: EndPoints.user.get(page, search),
  });
  return result;
};

export const getOneUser = async (id: string) => {
  const result = await apiRequest<User>({
    method: "GET",
    url: EndPoints.user.getById(id),
  });
  return result;
};
export const getProfile = async () => {
  const result = await apiRequest<User>({
    method: "GET",
    url: EndPoints.user.profile,
  });
  return result;
};
