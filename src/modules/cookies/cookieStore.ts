import type { CookieSetOptions } from 'universal-cookie';
import Cookie from 'universal-cookie';

import type { AuthResponse } from '../auth/authTypes';

type CookieType = AuthResponse & {
  isLoggedIn: 'true' | 'false';
};

export const cookie = new Cookie();

export const useCookieStore = () => {
  const browserCookie = cookie.getAll<CookieType>();

  const setCookie = (
    key: keyof CookieType,
    value: string,
    options?: CookieSetOptions,
  ) => {
    return cookie.set(key, value, options);
  };

  const logout = () => {
    cookie.remove('token');

    return (window.location.href = '/');
  };

  return {
    ...browserCookie,
    logout,
    setCookie,
  };
};
