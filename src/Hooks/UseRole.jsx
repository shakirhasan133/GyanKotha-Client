import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useRole = () => {
  const axiosSecure = UseAxiosSecure();
  const { user, loading } = UseAuth();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/role/${user?.email}`);
      return data.role;
    },
  });
  console.log(role);
  return [role, isLoading];
};

export default useRole;
