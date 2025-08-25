import { instance } from "@/lib/utils/api-reqiest";
import { addCharitableType } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const addCharitableAction = async (data: addCharitableType) => {
  try {
    const res = await instance.post(EndPoints.charitable.add, data);
    return {
      success: true,
      message: res.data.message,
    };
  } catch (error: any) {
    const message = error?.response?.data
      ? Object.keys(error.response.data)[0] +
        " : " +
        Object.values(error.response.data)[0]
      : error.message || "کێشەیەک لە سێرڤەرەوە دێتەوە";

    return {
      success: false,
      message,
    };
  }
};

export const updateCharitableAction = async (
  id: string,
  data: addCharitableType
) => {
  try {
    const res = await instance.patch(EndPoints.charitable.update(id), data);
    return {
      success: true,
      message: res.data.message,
    };
  } catch (error: any) {
    const message = error?.response?.data
      ? Object.keys(error.response.data)[0] +
        " : " +
        Object.values(error.response.data)[0]
      : error.message || "کێشەیەک لە سێرڤەرەوە دێتەوە";

    return {
      success: false,
      message,
    };
  }
};
