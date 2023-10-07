import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useCookieStore } from '@/modules/cookies/cookieStore';

import { Loader } from '../Loader';

export const LoginGuard = (props: PropsWithChildren) => {
  const router = useRouter();
  const { token } = useCookieStore();

  useEffect(() => {
    if (router.pathname !== '/login' && !token) {
      router.replace('/login');
    }
  }, [router, token]);

  if (token || router.pathname === '/login') {
    return props.children;
  }

  return <Loader />;
};
