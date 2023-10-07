import { useQuery, UseQueryOptions } from 'react-query';

import { queryKeys } from '@/shared/constants';

import { getALlProducts } from './productServices';
import { GetAllProductRequest, GetAllProductResponse } from './productTypes';

export const useGetAllProducts = (
  payload?: GetAllProductRequest,
  options?: UseQueryOptions<
    GetAllProductResponse,
    unknown,
    GetAllProductResponse,
    Array<string | GetAllProductRequest>
  >,
) => {
  return useQuery([queryKeys.GET_ALL_PRODUCTS, payload], () => getALlProducts(payload), options);
};