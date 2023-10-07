import type { UseQueryOptions } from 'react-query';
import { useQuery } from 'react-query';

import { queryKeys } from '@/shared/constants';

import { getAllCategories } from './categoriesService';
import type { GetAllCategoriesResponse } from './categoriesTypes';

export const useGetAllCategories = (
  options?: UseQueryOptions<
    GetAllCategoriesResponse,
    unknown,
    GetAllCategoriesResponse,
    Array<string>
  >,
) => {
  return useQuery([queryKeys.GET_ALL_CATEGORIES], getAllCategories, options);
};
