import { useLocale } from "next-intl";
import { getSession } from "./cookies";
import axios from "axios";

export interface SuccessResponse<T> {
  status: "ok";
  data: T;
  message: string;
}

export interface ErrorResponse {
  status: "error";
  message: string;
}

export type ResponseType<T> = SuccessResponse<T> | ErrorResponse;

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  timeout: 100000000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

instance.interceptors.request.use(async (config) => {
  const session = await getSession();
  const datas = session.token.split(",between,");
  const token = datas[0];
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  const locale = useLocale();

  config.headers["x-lang"] = locale === "kr" ? "ckb" : locale;

  return config;
});

// file/ requestHandler.ts
export const useRequest = () => {
  const locale = useLocale();

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL!,
    timeout: 100000000,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  instance.interceptors.request.use(async (config) => {
    const session = await getSession();
    const datas = session.token.split(",between,");
    const token = datas[0];

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["x-lang"] = locale === "kr" ? "ckb" : locale;

    return config;
  });

  return instance;
};
