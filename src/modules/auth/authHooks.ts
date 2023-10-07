import { UseMutationOptions, useMutation } from "react-query";
import { AuthRequest, AuthResponse } from "./authTypes";
import { queryKeys } from "@/shared/constants";
import { postLogin } from "./authServices";

export const useAuth = (
  options?: UseMutationOptions<AuthResponse, unknown, AuthRequest>
) => {
  return useMutation([queryKeys.AUTH], postLogin, options);
};
