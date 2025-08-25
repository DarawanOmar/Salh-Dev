import { apiRequest } from "@/lib/utils/axiosHandler";
import { EndPoints } from "@/lib/routes/EndPoints";
import { MoneyGiven, MoneyReceived } from "../users/_type";
import { Assisted } from "../assisted/_type";

export const getDashboardData = async () => {
  const result = await apiRequest<DashboardType>({
    method: "GET",
    url: EndPoints.dashboard,
  });
  return result;
};
export const getNotifications = async () => {
  const result = await apiRequest<Notification[]>({
    method: "GET",
    url: EndPoints.notification.get,
  });
  return result;
};

export const getCashs = async () => {
  const result = await apiRequest<typeCash[]>({
    method: "GET",
    url: EndPoints.cash_safe.getWithoutPagination,
  });
  return result;
};

export interface DashboardType {
  users: {
    total: number;
    active: number;
  };
  committeeMembers: {
    total: number;
  };
  headMembers: {
    total: number;
    temporary: number;
  };
  charitables: {
    total: number;
  };
  safe: {
    name: string;
    totalDinar: string;
    totalDollar: string;
  }[];
  moneyGiven: {
    currencyType: "USD" | "IQD";
    totalAmount: string;
  }[];
  moneyReceived: {
    currencyType: "USD" | "IQD";
    totalAmount: string;
  }[];
}
export interface Notification {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  seen: boolean;
  headMember: Assisted;
}
export interface typeCash {
  id: string;
  name: string;
  totalDollar: string;
  totalDinar: string;
  updatedAt: Date;
  createdAt: Date;
  MoneyGiven: MoneyGiven[];
  MoneyReceived: MoneyReceived[];
}
