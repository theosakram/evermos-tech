import { VStack } from '@chakra-ui/react';
import { useMemo } from 'react';

import dynamic from 'next/dynamic';

import { useGetAllCategories } from '@/modules/categories/categoriesHooks';
import type { NavbarProps } from '@/uikit/components/Navbar';
import { Navbar } from '@/uikit/components/Navbar';

const ProductsContainer = dynamic(
  () =>
    import('../uikit/containers/products/ProductsContainer').then(
      (comp) => comp.ProductsContainer,
    ),
  { ssr: false },
);

const Index = () => {
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

  return (
    <VStack w="100%" align="start" spacing={0}>
      <Navbar navs={mappedCategoriesData} />
      <ProductsContainer />
    </VStack>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Index;
