import { EndPoints } from "@/lib/routes/EndPoints";
import { instance } from "@/lib/utils/api-reqiest";

export const getBackupAction = async () => {
  try {
    const res = await instance.get(EndPoints.backup.get);
    return {
      data: res.data,
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
export const restoreBackupAction = async (data: any) => {
  try {
    const res = await instance.post(EndPoints.backup.restore, data);
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
