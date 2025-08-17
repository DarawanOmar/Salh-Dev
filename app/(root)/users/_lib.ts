import { apiRequest } from "@/lib/utils/axiosHandler";
import { User } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const getAllUsers = async () => {
  const result = await apiRequest<ResponseData<User[]>>({
    method: "GET",
    url: EndPoints.user.get,
  });
  return result;
};
