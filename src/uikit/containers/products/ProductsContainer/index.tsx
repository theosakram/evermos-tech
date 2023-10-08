import { SimpleGrid, VStack } from '@chakra-ui/react';

import { useCartStore } from '@/modules/cart/cartStore';
import { useGetAllProducts } from '@/modules/products/productHooks';
import { useToast } from '@/shared/hooks/useToast';
import { Loader } from '@/uikit/components/Loader';
import { ProductCard } from '@/uikit/components/ProductCard';

export const ProductsContainer = () => {
  const { data, isLoading } = useGetAllProducts();
  const { addProduct, getProductsId, incAmount, decAmount, removeProduct } =
    useCartStore();
  const { toast } = useToast();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <VStack w="100%" p="1rem" spacing="1rem">
      <SimpleGrid columns={{ lg: 3, xl: 5 }} spacing="1rem">
        {data?.map((datum) => (
          <ProductCard
            key={datum.id}
            id={datum.id}
            img={datum.image}
            title={datum.title}
            description={datum.description}
            price={datum.price}
            inCart={{
              status:
                getProductsId().has(datum.id) &&
                getProductsId().get(datum.id) > 0,
              amount: getProductsId().get(datum.id),
              onIncClick: () => incAmount(datum.id),
              onDecClick: () => {
                if (getProductsId().get(datum.id) - 1 === 0) {
                  return removeProduct(datum.id);
                }

                decAmount(datum.id);
              },
            }}
            onCartButtonClick={() => {
              addProduct(datum);
              toast({
                id: 'added-to-cart',
                status: 'success',
                title: 'YES',
                description: 'Product added to cart',
              });
            }}
            onBuyBuyNowButtonClick={() => [
              toast({
                id: 'no-money',
                status: 'error',
                title: 'NO',
                description: `You don't have money`,
              }),
            ]}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
