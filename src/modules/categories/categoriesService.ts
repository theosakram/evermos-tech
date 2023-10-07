import { fetcher } from '@/shared/fetcher';

import type { GetAllCategoriesResponse } from './categoriesTypes';

export const getAllCategories = () => {
  return fetcher<GetAllCategoriesResponse>({
    url: '/products/categories',
    params: { method: 'get' },
  });
};
