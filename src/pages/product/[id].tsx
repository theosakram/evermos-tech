import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Img,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

import { useRouter } from 'next/router';

import { useCartStore } from '@/modules/cart/cartStore';
import { useGetProductById } from '@/modules/products/productHooks';
import { Loader } from '@/uikit/components/Loader';

type PageQuery = {
  id: string;
};

const ProductDetailPage = () => {
  const query = useRouter().query as PageQuery;
  const { data, isLoading } = useGetProductById(
    { id: +query.id },
    { enabled: !!query.id && !isNaN(+query.id) },
  );
  const { getProductsId, incAmount, decAmount, removeProduct, addProduct } =
    useCartStore();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SimpleGrid
      w="100%"
      columns={{ sm: 2 }}
      h="100vh"
      gap="1rem"
      display={{ base: 'flex', sm: 'grid' }}
      flexDir="column"
    >
      <Center h={{ base: '25rem', sm: 'inherit' }}>
        <Img
          src={data?.image}
          h={{ base: '20rem', sm: '25rem', md: '35rem' }}
        />
      </Center>
      <Flex w="100%" align={{ base: 'start', sm: 'center' }}>
        <VStack w="100%" align={{ base: 'center', md: 'start' }} spacing="1rem">
          <Text as="b" fontSize={{ sm: '1.5rem', md: '2.5rem' }} w="85%">
            {data?.title}
          </Text>

          <HStack spacing="0.5rem" align="center">
            <Icon as={AiFillStar} color="orange.400" boxSize="1.25rem" />
            <Text>
              {data?.rating.rate} | {data?.rating.count} reviews
            </Text>
          </HStack>

          <Box pr="5rem" w="100%">
            <Divider borderColor="gray.500" w="100%" />
          </Box>

          <Text color="gray.700" fontSize="1rem" w="90%">
            {data?.description}
          </Text>

          <Text as="b" fontSize="2rem">
            ${data?.price}
          </Text>

          <HStack spacing="1rem">
            <NumberInput
              value={getProductsId().get(data?.id) || 0}
              min={0}
              max={99}
              w="5rem"
              isReadOnly
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper
                  onClick={() => {
                    if (getProductsId().get(data?.id)) {
                      return incAmount(data?.id);
                    }

                    addProduct(data);
                  }}
                />
                <NumberDecrementStepper
                  onClick={() => {
                    if (getProductsId().get(data?.id) - 1 === 0) {
                      return removeProduct(data?.id);
                    }

                    decAmount(data?.id);
                  }}
                />
              </NumberInputStepper>
            </NumberInput>

            <Text>In Cart</Text>
          </HStack>
        </VStack>
      </Flex>
    </SimpleGrid>
  );
};

export default ProductDetailPage;
