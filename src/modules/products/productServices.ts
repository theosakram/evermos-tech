import { fetcher } from '@/shared/fetcher';

import type {
  GetAllProductRequest,
  GetAllProductResponse,
  GetProductByIdRequest,
  GetProductsByCategoryRequest,
} from './productTypes';

export const getALlProducts = (payload?: GetAllProductRequest) => {
  return fetcher<GetAllProductResponse>({
    url: '/products',
    params: { method: 'get' },
    query: payload,
  });
};

export const getProductById = (payload: GetProductByIdRequest) => {
  return fetcher({
    url: `/products/${payload.id}`,
    params: { method: 'get' },
  });
};

export const getProductsByCategory = (
  payload: GetProductsByCategoryRequest,
) => {
  return fetcher<GetAllProductResponse>({
    url: `/products/category/${payload.category}`,
    params: { method: 'get' },
  });
};
