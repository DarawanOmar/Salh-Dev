"use server";

import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { addRecivedMoneyType } from "./_type";

export const addRecivedMoneyAction = async (data: addRecivedMoneyType) => {
  const result = await apiRequest({
    method: "POST",
    url: EndPoints.recived_money.add,
    data,
  });
  console.log("Data => ", data);
  console.log("URL => ", EndPoints.recived_money.add);
  console.log("object", result);
  return result;
};
export const updateRecivedMoneyAction = async (
  id: string,
  data: addRecivedMoneyType
) => {
  const result = await apiRequest({
    method: "PATCH",
    url: EndPoints.recived_money.update(id),
    data,
  });
  return result;
};
export const deleteRecivedMoneyAction = async (id: string) => {
  const result = await apiRequest({
    method: "DELETE",
    url: EndPoints.recived_money.delete(id),
  });
  return result;
};
