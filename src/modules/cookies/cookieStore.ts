import type { CookieSetOptions } from 'universal-cookie';
import Cookie from 'universal-cookie';

import type { AuthResponse } from '../auth/authTypes';

export const cookie = new Cookie();
export const useCookieStore = () => {
  const browserCookie = cookie.getAll<AuthResponse>();

  const setCookie = (key: keyof AuthResponse, value: string, options?: CookieSetOptions) => {
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
