import { EndPoints } from "@/lib/routes/EndPoints";
import { apiRequest } from "@/lib/utils/axiosHandler";
import { CashSafe, Document, Role } from "./type";
import { Charitable } from "@/app/(root)/charitable/_type";
import { User } from "@/app/(root)/users/_type";
import { Committee } from "@/app/(root)/committee/_type";
import { Assisted } from "@/app/(root)/assisted/_type";

export const getAllRoles = async () => {
  const result = await apiRequest<ResponseData<Role[]>>({
    method: "GET",
    url: EndPoints.role.getWithoutPagination,
  });
  return result;
};

export const getAllCharitableWithoutPagination = async () => {
  const result = await apiRequest<ResponseData<Charitable[]>>({
    method: "GET",
    url: EndPoints.charitable.getWithoutPagination,
  });
  return result;
};
export const getAllUsersWithoutPagination = async () => {
  const result = await apiRequest<ResponseData<User[]>>({
    method: "GET",
    url: EndPoints.user.getWithoutPagination,
  });
  return result;
};
export const getAllHeadMemberWithoutPagination = async () => {
  const result = await apiRequest<ResponseData<Assisted[]>>({
    method: "GET",
    url: EndPoints.head_members.getWithoutPagination,
  });
  return result;
};
export const getCashSafe = async () => {
  const result = await apiRequest<CashSafe[]>({
    method: "GET",
    url: EndPoints.cash_safe.getWithoutPagination,
  });
  return result;
};
export const getDocuments = async () => {
  const result = await apiRequest<Document[]>({
    method: "GET",
    url: EndPoints.documents.getWithoutPagination,
  });
  return result;
};
