import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { Charitable } from "./_type";

export const getAllCharitable = async (page: string, search: string) => {
  const result = await apiRequest<ResponseData<Charitable[]>>({
    method: "GET",
    url: EndPoints.charitable.get(page, search),
  });
  return result;
};

export const getOneCharitable = async (id: string) => {
  const result = await apiRequest<Charitable>({
    method: "GET",
    url: EndPoints.charitable.getById(id),
  });
  return result;
};
