import {
  Button,
  Center,
  Checkbox,
  Flex,
  HStack,
  Icon,
  IconButton,
  Img,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsTrash } from 'react-icons/bs';

import { useCartStore } from '@/modules/cart/cartStore';
import { useToast } from '@/shared/hooks/useToast';

const CartPage = () => {
  const { products, removeProduct, incAmount, decAmount, getTotalPrice } =
    useCartStore();
  const { toast } = useToast();

  return (
    <Center w="100%" p="1rem">
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing="1rem"
        align="start"
      >
        <VStack spacing="1rem">
          {products.map((product) => (
            <Flex
              key={product.id}
              bg="white"
              p="1rem"
              gap="1rem"
              maxW="100%"
              minW={{ sm: '40rem' }}
              borderRadius="sm"
            >
              <Checkbox />
              <Img src={product.image} boxSize="5rem" />
              <VStack align="start" w="100%">
                <Text>{product.title}</Text>
                <Text as="b">${product.price}</Text>

                <Flex w="100%" justify="end">
                  <HStack spacing="1rem">
                    <IconButton
                      aria-label="remove-product-from-cart"
                      icon={<Icon as={BsTrash} boxSize="1.25rem" />}
                      onClick={() => removeProduct(product.id)}
                    />
                    <NumberInput
                      value={product.amount}
                      min={0}
                      max={99}
                      w="5rem"
                      isReadOnly
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper
                          onClick={() => incAmount(product.id)}
                        />
                        <NumberDecrementStepper
                          onClick={() => {
                            if (product.amount - 1 === 0) {
                              return removeProduct(product.id);
                            }

                            decAmount(product.id);
                          }}
                        />
                      </NumberInputStepper>
                    </NumberInput>
                  </HStack>
                </Flex>
              </VStack>
            </Flex>
          ))}
        </VStack>

        <VStack p="1rem" bg="white" w="20rem" align="start" borderRadius="md">
          <Text as="b">Summary</Text>

          <Flex w="100%" align="center">
            <Text>Total Price:</Text>
            <Spacer />
            <Text as="b" fontSize="2rem">
              ${getTotalPrice()}
            </Text>
          </Flex>

          <Button
            w="100%"
            colorScheme="blue"
            onClick={() => {
              toast({
                id: 'no-money',
                status: 'error',
                title: 'NO',
                description: `You don't have money`,
              });
            }}
          >
            Buy
          </Button>
        </VStack>
      </Stack>
    </Center>
  );
};

export default CartPage;
