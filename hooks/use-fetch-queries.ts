import { getAllCommiteeWithoutPagination } from "@/app/(root)/committee/_lib";
import { getProfile } from "@/app/(root)/users/_lib";
import {
  getAllCharitableWithoutPagination,
  getAllHeadMemberWithoutPagination,
  getAllRoles,
  getAllUsersWithoutPagination,
  getCashSafe,
  getDocuments,
} from "@/query/lib";
import { useQuery } from "@tanstack/react-query";

export const useGetRole = () => {
  return useQuery({
    queryKey: ["getRole"],
    queryFn: getAllRoles,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useGetCommitteesWithoutPagination = () => {
  return useQuery({
    queryKey: ["getCommitteeWithoutPagination"],
    queryFn: getAllCommiteeWithoutPagination,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
export const useGetCharitable = () => {
  return useQuery({
    queryKey: ["getCharitableWithoutPagination"],
    queryFn: getAllCharitableWithoutPagination,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
export const useGetHeadMember = () => {
  return useQuery({
    queryKey: ["getHeadMemberWithoutPagination"],
    queryFn: getAllHeadMemberWithoutPagination,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
export const useGetUsers = () => {
  return useQuery({
    queryKey: ["getUserWithoutPagination"],
    queryFn: getAllUsersWithoutPagination,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
export const useGetCashSafe = () => {
  return useQuery({
    queryKey: ["getCashSafe"],
    queryFn: getCashSafe,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
export const useGetDocuments = () => {
  return useQuery({
    queryKey: ["getDocuments"],
    queryFn: getDocuments,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
export const useGetProfile = () => {
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
