import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { RecivedMoney } from "./_type";

export const getAllRecivedMoney = async (page: string, search: string) => {
  const result = await apiRequest<ResponseData<RecivedMoney[]>>({
    method: "GET",
    url: EndPoints.income_revenue.get(page, search),
  });
  return result;
};

export const getOneRecivedMoney = async (id: string) => {
  const result = await apiRequest<RecivedMoney>({
    method: "GET",
    url: EndPoints.income_revenue.getById(id),
  });
  return result;
};
