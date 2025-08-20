import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { MoneyGiven, MoneyReceived } from "../users/_type";

export const getDashboardData = async () => {
  const result = await apiRequest<any[]>({
    method: "GET",
    url: EndPoints.dashboard,
  });
  return result;
};

export const getCashs = async () => {
  const result = await apiRequest<typeCash[]>({
    method: "GET",
    url: EndPoints.cash_safe.getWithoutPagination,
  });
  return result;
};

export interface typeCash {
  id: string;
  name: string;
  totalDollar: string;
  totalDinar: string;
  updatedAt: Date;
  createdAt: Date;
  MoneyGiven: MoneyGiven[];
  MoneyReceived: MoneyReceived[];
}
