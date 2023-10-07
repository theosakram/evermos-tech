import { fetcher } from '@/shared/fetcher';

import { GetAllProductRequest, GetAllProductResponse } from './productTypes';

export const getALlProducts = (payload?: GetAllProductRequest) => {
  return fetcher<GetAllProductResponse>({
    url: '/products',
    params: { method: 'get' },
    query: payload,
  });
};
