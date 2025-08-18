import { EndPoints } from "@/lib/routes/EndPoints";
import { apiRequest } from "@/lib/utils/axiosHandler";
import { Role } from "./type";
import { Charitable } from "@/app/(root)/charitable/_type";
import { User } from "@/app/(root)/users/_type";
import { Committee } from "@/app/(root)/committee/_type";

export const getAllRoles = async () => {
  const result = await apiRequest<Role[]>({
    method: "GET",
    url: EndPoints.role.getWithoutPagination,
  });
  return result;
};

export const getAllCharitableWithoutPagination = async () => {
  const result = await apiRequest<Charitable[]>({
    method: "GET",
    url: EndPoints.charitable.getWithoutPagination,
  });
  return result;
};
export const getAllUsersWithoutPagination = async () => {
  const result = await apiRequest<User[]>({
    method: "GET",
    url: EndPoints.user.getWithoutPagination,
  });
  return result;
};
export const getAllHeadMemberWithoutPagination = async () => {
  const result = await apiRequest<Committee[]>({
    method: "GET",
    url: EndPoints.assisted_committee.getWithoutPagination,
  });
  return result;
};
