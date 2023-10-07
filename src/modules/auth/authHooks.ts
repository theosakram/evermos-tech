import type { UseMutationOptions } from "react-query";
import { useMutation } from "react-query";
import type { AuthRequest, AuthResponse } from "./authTypes";
import { queryKeys } from "@/shared/constants";
import { postLogin } from "./authServices";

export const useAuth = (
  options?: UseMutationOptions<AuthResponse, unknown, AuthRequest>
) => {
  return useMutation([queryKeys.AUTH], postLogin, options);
};
