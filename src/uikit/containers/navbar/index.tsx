import { useMemo } from 'react';

import { useGetAllCategories } from '@/modules/categories/categoriesHooks';
import type { NavbarProps } from '@/uikit/components/Navbar';
import { Navbar } from '@/uikit/components/Navbar';

export const NavbarContainer = () => {
  const { data } = useGetAllCategories();
  const mappedCategoriesData = useMemo((): NavbarProps['navs'] => {
    if (data) {
      return data.map((datum) => ({
        label: datum,
        href: {
          pathname: '/categories/[category]',
          query: { category: datum },
        },
      }));
    }

    return [];
  }, [data]);

  return <Navbar navs={mappedCategoriesData} />;
};
