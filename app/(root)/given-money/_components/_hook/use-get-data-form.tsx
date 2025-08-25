import {
  useGetCashSafe,
  useGetDocuments,
  useGetHeadMember,
  useGetUsers,
} from "@/hooks/use-fetch-queries";
export const useGetDataForm = () => {
  const { data: headMembers, isLoading, isError } = useGetHeadMember();
  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useGetUsers();
  const {
    data: cashSafe,
    isLoading: cashSafeLoading,
    isError: cashSafeError,
  } = useGetCashSafe();

  return {
    headMembers,
    users,
    cashSafe,
    isLoading,
    usersLoading,
    cashSafeLoading,
    isError,
    usersError,
    cashSafeError,
  };
};
