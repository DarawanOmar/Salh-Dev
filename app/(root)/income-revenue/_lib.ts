import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { IncomeRevenue } from "./_type";

export const getAllIncomeRevenue = async (page: string, search: string) => {
  const result = await apiRequest<ResponseData<IncomeRevenue[]>>({
    method: "GET",
    url: EndPoints.income_revenue.get(page, search),
  });
  return result;
};

export const getOneIncomeRevenue = async (id: string) => {
  const result = await apiRequest<IncomeRevenue>({
    method: "GET",
    url: EndPoints.income_revenue.getById(id),
  });
  return result;
};
