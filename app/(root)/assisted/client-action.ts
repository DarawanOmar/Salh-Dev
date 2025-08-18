import axios from "axios";
import { AddImageType, addUAssistedType } from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const AddAssistedAction = async (data: addUAssistedType) => {
  try {
    const res = await axios.post(EndPoints.assisted.add, data);

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

export const UpdateAssistedAction = async (
  id: string,
  data: addUAssistedType
) => {
  try {
    const res = await axios.patch(EndPoints.assisted.update(id), data);

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

export const AddImageAssisted = async (data: AddImageType) => {
  try {
    const res = await axios.post(EndPoints.assisted_image.add, data);

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

export const UpdateImageAssisted = async (id: string, data: AddImageType) => {
  try {
    const res = await axios.patch(EndPoints.assisted_image.update(id), data);

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
