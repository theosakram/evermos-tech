import { fetcher } from "@/shared/fetcher";
import { AuthRequest, AuthResponse } from "./authTypes";

export const postLogin = (payload: AuthRequest) => {
  return fetcher<AuthResponse>({
    url: "/auth/login",
    params: { method: "post", body: JSON.stringify(payload) },
  });
};
