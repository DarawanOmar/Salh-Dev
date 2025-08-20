"use server";

import { EndPoints } from "@/lib/routes/EndPoints";
import axios from "axios";
import { loginSchemaType } from "./_component/lib";
import { apiRequest } from "@/lib/utils/axiosHandler";

export async function loginAction(data: loginSchemaType) {
  try {
    const res = await axios.post(EndPoints.login, data);
    if (res.status === 200) {
      // const partTranslation: Record<string, string> = {
      //   buy: "purchase",
      //   case: "settings/cash",
      //   dept: "loans",
      //   expense: "expenses",
      //   home: "main",
      //   invoice: "invoices",
      //   loan: "loans",
      //   logger: "settings/activity-history",
      //   report: "report",
      //   role: "setting/role",
      //   sell: "sale",
      //   setting: "setting",
      //   storage: "warehouse",
      //   user: "setting/user",
      // };
      // const translatedPaths = res.data.user.parts
      //   .map((part) => partTranslation[part.name])
      //   .filter(Boolean);
      // const removeDuplicate = (arr: string[]) => {
      //   return [...new Set(arr)];
      // };
      let redirectTo = "dashboard";
      // for (const path of allowedRedirects) {
      //   if (translatedPaths.includes(path)) {
      //     redirectTo = path;
      //     break;
      //   }
      // }
      // if (!redirectTo) {
      //   redirectTo = "main";
      // }
      // console.log("Permissions:", translatedPaths);
      const token = res.data?.token.trim() + ",between," + "";
      // JSON.stringify(removeDuplicate(translatedPaths));

      return {
        success: true,
        message: "بە سەرکەوتوویی چوویتەژوورەوە",
        data: {
          token,
          redirectTo,
        },
      };
    }
  } catch (error: any) {
    const message = error?.response?.data[Object.keys(error.response.data)[0]];
    return {
      success: false,
      message,
    };
  }
}

export type loginType = {
  token: string;
  user: {
    phone: string;
    name: string;
    role: {
      name: string;
    };
    parts: Array<{
      id: number;
      name: string;
      permissions: Array<{
        id: number;
        name: string;
      }>;
    }>;
  };
};

export const signOut = async () => {
  const res = await apiRequest({ method: "POST", url: EndPoints.logout });
  return res;
};

const allowedRedirects = [
  "main",
  "sale",
  "purchase",
  "expenses",
  "warehouse",
  "loans",
  "invoices",
  "report",
  "setting",
];
