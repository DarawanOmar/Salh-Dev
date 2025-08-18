import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { Given } from "./_type";

export const getAllGiven = async (page: string, search: string) => {
  const result = await apiRequest<ResponseData<Given[]>>({
    method: "GET",
    url: EndPoints.money_given.get(page, search),
  });
  return result;
};

export const getOneGiven = async (id: string) => {
  const result = await apiRequest<Given>({
    method: "GET",
    url: EndPoints.money_given.getById(id),
  });
  return result;
};
