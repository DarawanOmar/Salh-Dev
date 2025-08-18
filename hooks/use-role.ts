import {
  getAllCommitee,
  getAllCommiteeWithoutPagination,
} from "@/app/(root)/committee/_lib";
import { getAllRoles } from "@/query/lib";
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
