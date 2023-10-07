import { VStack } from '@chakra-ui/react';

import dynamic from 'next/dynamic';

const ProductsContainer = dynamic(
  () =>
    import('../uikit/containers/products/ProductsContainer').then(
      (comp) => comp.ProductsContainer,
    ),
  { ssr: false },
);

const Index = () => {
  return (
    <VStack w="100%" align="start" spacing={0}>
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
