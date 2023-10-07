import type { UseQueryOptions } from 'react-query';
import { useQuery } from 'react-query';

import { queryKeys } from '@/shared/constants';

import { getALlProducts, getProductById } from './productServices';
import type {
  GetAllProductRequest,
  GetAllProductResponse,
  GetProductByIdRequest,
  Product,
} from './productTypes';

export const useGetAllProducts = (
  payload?: GetAllProductRequest,
  options?: UseQueryOptions<
    GetAllProductResponse,
    unknown,
    GetAllProductResponse,
    Array<string | GetAllProductRequest>
  >,
) => {
  return useQuery(
    [queryKeys.GET_ALL_PRODUCTS, payload],
    () => getALlProducts(payload),
    options,
  );
};

export const useGetProductById = (
  payload: GetProductByIdRequest,
  options?: UseQueryOptions<
    Product,
    unknown,
    Product,
    Array<string | GetProductByIdRequest>
  >,
) => {
  return useQuery(
    [queryKeys.GET_PRODUCT_BY_ID, payload],
    () => getProductById(payload),
    options,
  );
};
