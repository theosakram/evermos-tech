import { fetcher } from '@/shared/fetcher';

import type { AuthRequest, AuthResponse } from './authTypes';

export const postLogin = (payload: AuthRequest) => {
  return fetcher<AuthResponse>({
    url: '/auth/login',
    params: { method: 'post', body: JSON.stringify(payload) },
  });
};
