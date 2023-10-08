import { VStack } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useGetProductsByCategory } from '@/modules/products/productHooks';

type PageQuery = {
  category: string;
};

const ProductsContainer = dynamic(
  () =>
    import('../../uikit/containers/products/ProductsContainer').then(
      (comp) => comp.ProductsContainer,
    ),
  { ssr: false },
);

const ProductByCategoryPage = () => {
  const query = useRouter().query as PageQuery;
  const { data, isLoading } = useGetProductsByCategory(
    { category: query.category },
    { enabled: !!query.category },
  );

  return (
    <VStack w="100%" align="start" spacing={0}>
      <ProductsContainer data={data} isLoading={isLoading} />
    </VStack>
  );
};

export default ProductByCategoryPage;
