"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { addRecivedMoneyType } from "./_type";

export const addRecivedMoneyAction = async (data: addRecivedMoneyType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.income_revenue.add,
    data,
  });
  console.log("URL => ", EndPoints.income_revenue.add);
  console.log("object", result);
  return result;
};
export const updateRecivedMoneyAction = async (
  id: string,
  data: addRecivedMoneyType
) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.income_revenue.update(id),
    data,
  });
  return result;
};
export const deleteRecivedMoneyAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.income_revenue.delete(id),
  });
  return result;
};
