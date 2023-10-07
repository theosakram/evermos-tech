import { SimpleGrid, VStack } from '@chakra-ui/react';

import { useGetAllProducts } from '@/modules/products/productHooks';
import { ProductCard } from '@/uikit/components/ProductCard';

export const ProductsContainer = () => {
  const { data } = useGetAllProducts();

  return (
    <VStack w="100%" p="1rem" spacing="1rem">
      <SimpleGrid columns={5} spacing="1rem">
        {data?.map((datum) => (
          <ProductCard
            key={datum.id}
            id={datum.id}
            img={datum.image}
            title={datum.title}
            description={datum.description}
            price={datum.price}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
