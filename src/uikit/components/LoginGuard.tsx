import { PropsWithChildren, useEffect } from "react";
import { useCookieStore } from "../../modules/cookies/cookieStore";
import { useRouter } from "next/router";
import { Loader } from "./Loader";

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
