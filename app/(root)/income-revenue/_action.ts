"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { addIncomeRevenueType } from "./_type";

export const addIncomeRevenueAction = async (data: addIncomeRevenueType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.income_revenue.add,
    data,
  });
  console.log("URL => ", EndPoints.income_revenue.add);
  console.log("object", result);
  return result;
};
export const updateIncomeRevenueAction = async (
  id: string,
  data: addIncomeRevenueType
) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.income_revenue.update(id),
    data,
  });
  return result;
};
export const deleteIncomeRevenueAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.income_revenue.delete(id),
  });
  return result;
};
