import { apiRequest } from "@/lib/utils/axiosHandler";
import { Assisted } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const getAllAssisted = async (page: string, search: string) => {
  const result = await apiRequest<ResponseData<Assisted[]>>({
    method: "GET",
    url: EndPoints.head_members.get(page, search),
  });
  return result;
};

export const getOneAssisted = async (id: string) => {
  const result = await apiRequest<Assisted>({
    method: "GET",
    url: EndPoints.head_members.getById(id),
  });
  return result;
};
