import { useMemo } from 'react';

import { useRouter } from 'next/router';

import { useGetAllCategories } from '@/modules/categories/categoriesHooks';
import type { NavbarProps } from '@/uikit/components/Navbar';
import { Navbar } from '@/uikit/components/Navbar';

export const NavbarContainer = () => {
  const router = useRouter();
  const { data } = useGetAllCategories({
    enabled: router.pathname !== '/login',
  });

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

  if (router.pathname !== '/login') {
    return <Navbar navs={mappedCategoriesData} />;
  }

  return null;
};
