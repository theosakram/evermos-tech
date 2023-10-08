import { VStack } from '@chakra-ui/react';

import dynamic from 'next/dynamic';

import { useGetAllProducts } from '@/modules/products/productHooks';

const ProductsContainer = dynamic(
  () =>
    import('../uikit/containers/products/ProductsContainer').then(
      (comp) => comp.ProductsContainer,
    ),
  { ssr: false },
);

const Index = () => {
  const { data, isLoading } = useGetAllProducts();

  return (
    <VStack w="100%" align="start" spacing={0}>
      <ProductsContainer data={data} isLoading={isLoading} />
    </VStack>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Index;
