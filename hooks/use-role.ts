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
