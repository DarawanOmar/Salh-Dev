import { instance } from "@/lib/utils/api-reqiest";
import {
  AddDocumentType,
  AddImageType,
  addUAssistedType,
  AddVideoType,
} from "./_type";
import { EndPoints } from "@/lib/routes/EndPoints";

export const AddAssistedAction = async (data: addUAssistedType) => {
  try {
    const res = await instance.post(EndPoints.head_members.add, data);

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
    const res = await instance.patch(EndPoints.head_members.update(id), data);

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
    const res = await instance.post(EndPoints.assisted_image.add, data);

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
    const res = await instance.patch(EndPoints.assisted_image.update(id), data);

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

export const AddVideoAction = async (data: AddVideoType) => {
  try {
    const res = await instance.post(EndPoints.videos.add, data);

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
export const UpdateVideoAction = async (id: string, data: AddVideoType) => {
  try {
    const res = await instance.patch(EndPoints.videos.update(id), data);

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

export const AddDocumentAction = async (data: AddDocumentType) => {
  try {
    const res = await instance.post(EndPoints.documents.add, data);
    console.log("Log => ", EndPoints.documents.add, data);
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
export const UpdateDocumentAction = async (
  id: string,
  data: AddDocumentType
) => {
  try {
    const res = await instance.patch(EndPoints.documents.update(id), data);

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
