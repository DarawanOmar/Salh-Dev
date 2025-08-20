import { instance } from "@/lib/utils/api-reqiest";
import { addUCommitteeType } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const addCommitte = async (data: addUCommitteeType) => {
  try {
    const res = await instance.post(EndPoints.commitee.add, data);
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

export const updateCommitte = async (id: string, data: addUCommitteeType) => {
  try {
    const res = await instance.patch(EndPoints.commitee.update(id), data);
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
