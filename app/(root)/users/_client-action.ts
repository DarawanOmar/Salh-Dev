import { EndPoints } from "@/lib/routes/EndPoints";
import { instance } from "@/lib/utils/api-reqiest";
import { addUserType } from "./_type";

export const addUserAction = async (data: addUserType) => {
  try {
    const res = await instance.post(EndPoints.user.add, data);
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
export const updateUserAction = async (id: string, data: addUserType) => {
  try {
    const res = await instance.patch(EndPoints.user.update(id), data);
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
