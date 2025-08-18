import { apiRequest } from "@/lib/utils/axiosHandler";
import { Committee } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const getAllCommitee = async (page: string, search: string) => {
  const result = await apiRequest<ResponseData<Committee[]>>({
    method: "GET",
    url: EndPoints.commitee.get(page, search),
  });
  return result;
};
export const getAllCommiteeWithoutPagination = async () => {
  const result = await apiRequest<Committee[]>({
    method: "GET",
    url: EndPoints.commitee.getWithoutPagination,
  });
  return result;
};

export const getOneCommitee = async (id: string) => {
  const result = await apiRequest<Committee>({
    method: "GET",
    url: EndPoints.user.getById(id),
  });
  return result;
};
