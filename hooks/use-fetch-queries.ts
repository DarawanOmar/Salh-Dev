import { getAllCommiteeWithoutPagination } from "@/app/(root)/committee/_lib";
import {
  getAllCharitableWithoutPagination,
  getAllRoles,
  getAllUsersWithoutPagination,
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
export const useGetUsers = () => {
  return useQuery({
    queryKey: ["getUserWithoutPagination"],
    queryFn: getAllUsersWithoutPagination,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
