import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Loader } from "../Loader";
import { useCookieStore } from "@/modules/cookies/cookieStore";

export const LoginGuard = (props: PropsWithChildren) => {
  const router = useRouter();
  const { token } = useCookieStore();

  useEffect(() => {
    if (router.pathname !== "/login" && !token) {
      router.replace("/login");
    }
  }, [router, token]);

  if (token || router.pathname === "/login") {
    return props.children;
  }

  return <Loader />;
};
