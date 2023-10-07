import { VStack } from '@chakra-ui/react';

import dynamic from 'next/dynamic';

import { Navbar } from '@/uikit/components/Navbar';

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
      <Navbar />
      <ProductsContainer />
    </VStack>
  );
};

export default Index;
